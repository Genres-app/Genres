// Import React dependencies.
import React, { useEffect, useCallback, useMemo, useState } from 'react';
// Import the Slate editor factory.
import { createEditor, Editor, Transforms, Element as SlateElement } from 'slate';
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';
// Import withHistory to allow for redo and undo functions
import { withHistory } from 'slate-history';

import { ThemeProvider, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SaveIcon from '@material-ui/icons/Save';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import './WPEditor.css';

// HELP from https://docs.slatejs.org/walkthroughs/01-installing-slate
// HELP from https://github.com/ianstormtaylor/slate/blob/main/site/examples/richtext.tsx
// The text editor BELOW consists of the Slate.js framework for building
// rich text editors. It's implementation as of now should only be
// considered a placeholder for more ambitious plans for a text editor.
// This text editor as of now is very BASIC and NOT connected to a
// backend currently.

// useStyles is the CSS for the text editor, edit BELOW:
const useStyles = makeStyles(() => ({
  // BELOW: CSS for Appbar itself
  grow: {
    flexGrow: 1,
  },
  readBar: {
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: 2,
  },
  container: {
    backgroundColor: 'white',
    display: 'flex',
    minWidth: '375px',
    '@media (min-width:1120px)': { // eslint-disable-line no-useless-computed-key
      minWidth: '1080px',
    },
    margin: '0 auto',
  },
  back: {
    margin: 'auto',
    color: '#505050', 
  },
  options: {
    color: '#505050',
  },
  // ABOVE: CSS for Appbar itself

  // BELOW: CSS for Appbar Fields
  readBar: {
    backgroundColor: 'white',
    paddingTop: '10px',
    paddingBottom: '5px',
    maxHeight: '65px',
    position: 'fixed',
    top: 0,
    zIndex: 2,
  },
  buttonContainer: {
    minWidth: '480px',
    display: 'flex',
    flexDirection: 'row',
  },
  divFields: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginLeft: '50px',
    justifyContent: 'space-between',
  },
  chName:{
    width: '20%',
    height: '20px',
    marginTop: '10px',
    marginBottom: '50px',
  },
  draftsButton: {
    backgroundColor: 'white',
    borderColor: '#49d6af',
    height: '40px',
    marginTop: '10px',
    filter: 'drop-shadow(1px 2px .65px #3EB997)',
  },
  bookButton: {
    backgroundColor: 'white',
    borderColor: '#49d6af',
    marginLeft: '1rem',
    height: '40px',
    marginTop: '10px',
    filter: 'drop-shadow(1px 2px .65px #3EB997)',
  },
  saveButton: {
    marginLeft: '0.75rem',
    width: '33px',
    marginBottom: '15px',
  },
  text: {
    paddingTop: '5px',
    color: '#3EB997',
    paddingBottom: '3px',
  },
  icon: {
    paddingRight: '5px',
    color: '#3EB997',
  },
  // ABOVE: CSS for Appbar Fields
}));

// Edit to change Button outline colors BELOW:
const theme = createMuiTheme({
  palette: {
    primary: {
      // Change the hex here as needed:
      main: '#49d6af',
    },
  }
});

export default function WPEditor() {
  const classes = useStyles();

  // Create a Slate editor object that won't change across renders.
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  
  // Keep track of state for the value of the editor.
  // Initial Values of Slate Text Editor BELOW:
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Begin here.' }],
    },
  ])

  // ---------------------------------- //
  // Define a rendering function based on the element passed to `props`. Use
  // `useCallback` here to memoize the function for subsequent renders.
  // Add new BLOCK element types as CASE BELOW:
  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code': return <CodeElement {...props} />
      case 'block-quote': return <BlockQuoteElement {...props} />
      case 'h-1': return <HeadingOneElement {...props} />
      case 'h-2': return <HeadingTwoElement {...props} />
      case 'ul': return <ULElement {...props} />
      case 'ol':return <OLElement {...props} />
      default: return <DefaultElement {...props} />
    }}, [])
  // YOU HAVE TO DEFINE NEW BLOCK ELEMENT TYPES HERE TOO AS CONST
  // Define a React component renderer for h1.
  const HeadingOneElement = props => {
    return (
      <pre {...props.attributes}>
        <h1>{props.children}</h1>
      </pre>
    )
  }
  // Define a React component renderer for h2.
  const HeadingTwoElement = props => {
    return (
      <pre {...props.attributes}>
        <h2>{props.children}</h2>
      </pre>
    )
  }
  // Define a React component renderer for unordered list.
  const ULElement = props => {
    return (
        <ul {...props.attributes} style={{display: 'list-item', fontSize: '18px'}}>{props.children}</ul>
    )
  }
  // Define a React component renderer for ordered list.
  const OLElement = props => {
    return (
      <ol {...props.attributes} style={{display: 'list-item', fontSize: '18px'}}>{props.children}</ol>
    )
  }
  // Define a React component renderer for the code blocks.
  const CodeElement = props => {
    return (
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
  }
  // Define a React component renderer for the block quotes.
  const BlockQuoteElement = props => {
    return (
      <pre {...props.attributes} style={{fontFamily: 'times new roman', fontSize: '18px'}}>
        <blockquote><p><em>{props.children}</em></p></blockquote>
      </pre>
    )
  }
  // Default Element;
  const DefaultElement = props => {
    return <p style={{fontSize: '18px'}}{...props.attributes}>{props.children}</p>
  }
  // ---------------------------------- //

  // ---------------------------------- //
  // Edit Leaf to implement different MARK types BELOW:
  const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
      children = <strong>{children}</strong>
    }
  
    if (leaf.italic) {
      children = <em>{children}</em>
    }
  
    if (leaf.underline) {
      children = <u>{children}</u>
    }
    return <span {...attributes}>{children}</span>
  }
  // Define a leaf rendering function that is memoized with `useCallback`.
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])

  // BELOW: Editing MARKS (bold, italics, etc.)
  // Checks if a mark (bold, italics, etc.) is active
  const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
  }
  // Toggles the appropriate mark (bold, italics, etc.)
  const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format)
    if (isActive) {
      Editor.removeMark(editor, format)
    } else {
      Editor.addMark(editor, format, true)
    }
  }
  // ABOVE: Editing MARKS (bold, italics, etc.)
  // ---------------------------------- //

  // ---------------------------------- //
  // BELOW: Editing BLOCKS (headings, lists etc.)
  // Checks if a block type (headings, lists, etc.) is active
  const BlockEditor = {
    // HEADING 1
    isHeadingOneActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'h-1',
      })
      return !!match
    },
    toggleHeadingOne(editor) {
      const isActive = BlockEditor.isHeadingOneActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'h-1' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
    // HEADING 2
    isHeadingTwoActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'h-2',
      })
      return !!match
    },
    toggleHeadingTwo(editor) {
      const isActive = BlockEditor.isHeadingTwoActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'h-2' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
    // UL
    isULActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'ul',
      })
      return !!match
    },
    toggleUL(editor) {
      const isActive = BlockEditor.isULActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'ul' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
    //OL
    isOLActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'ol',
      })
      return !!match
    },
    toggleOL(editor) {
      const isActive = BlockEditor.isOLActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'ol' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
    // CODE BLOCK
    isCodeBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'code',
      })
      return !!match
    },
    toggleCodeBlock(editor) {
      const isActive = BlockEditor.isCodeBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'code' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
    // BLOCK QUOTE
    isBlockQuoteActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'block-quote',
      })
      return !!match
    },
    toggleBlockQuote(editor) {
      const isActive = BlockEditor.isBlockQuoteActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'block-quote' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
  }
  // ABOVE: Editing BLOCKS (headings, lists etc.)
  // ---------------------------------- //

  return (
    <React.Fragment>
      {/* BELOW: Top Appbar */}
      <AppBar className={classes.readBar}>
        <Toolbar>
          <React.Fragment>
            <AppBar className={classes.readBar} elevation={1}>
              <Toolbar>
                <div className={classes.divFields}>
                  {/* TEXT FIELD BELOW */}
                  {/* FIXME: The text field where the chapter name should be
                  has no functionality for now. It needs to be connected to a 
                  backend yet to be implemented */}
                  <ThemeProvider theme={theme}>
                    <TextField
                      className={classes.chName}
                      label="Chapter Name"
                      variant="outlined"
                      id="mui-theme-provider-filled-input"
                      size="small"
                    />
                  </ThemeProvider>
                  {/* TEXT FIELD ABOVE */}

                  {/* BUTTONS BELOW */}
                  {/* FIXME: The buttons have no functionality for now.
                  They need to be connected to a backend yet to be implemented */}
                  <div className={classes.buttonContainer}>
                    {/* {/* ADD TO DRAFTS Button:  */}
                    {/* FIXME: a drafts page has yet to be implemented */}
                    <Button className={classes.draftsButton} variant="outlined">
                      <AddCircleOutlineIcon className={classes.icon}/>
                      <Typography className={classes.text}>Add to Drafts</Typography>
                    </Button>
                    {/* ADD TO BOOK Button */}
                    {/* FIXME: a full book object has yet to be implemented */}
                    <Button className={classes.bookButton} variant="outlined">
                      <AddCircleOutlineIcon className={classes.icon}/>
                      <Typography className={classes.text}>Add to Book</Typography>
                    </Button>
                    {/* SAVE DOCUMENT Button */}
                    {/* FIXME: a full database of book objects in the backend
                    has yet to be implemented */}
                    <IconButton className={classes.saveButton} aria-label="save button" component="span">
                      <SaveIcon />
                    </IconButton>
                  </div>
                  {/* BUTTONS ABOVE */}
                </div>
              </Toolbar>
            </AppBar>
          </React.Fragment>
        </Toolbar>
      </AppBar>
      {/* ABOVE: Top Appbar */}
      
      {/* BELOW: Text Editor Options Appbar */}
      {/* This Appbar has a DIFFERENT CSS sheet: WPEditor.css */}
      <AppBar className="editorBar" color="default" elevation={1}>
          <Toolbar>
            <div className="buttonsContainer">
              {/* HEADING 1 BUTTON BELOW: */}
              <Button onMouseDown={event => { event.preventDefault()
                  BlockEditor.toggleHeadingOne(editor)
                }}> H1
              </Button>
              {/* HEADING 2 BUTTON BELOW: */}
              <Button onMouseDown={event => { event.preventDefault()
                  BlockEditor.toggleHeadingTwo(editor)
                }}> H2
              </Button>
              {/* CODE BLOCK BUTTON BELOW: */}
              <Button onMouseDown={event => { event.preventDefault()
                  BlockEditor.toggleCodeBlock(editor)
                }}> Code Block
              </Button>
              {/* BLOCK QUOTE BUTTON BELOW: */}
              <Button onMouseDown={event => { event.preventDefault()
                  BlockEditor.toggleBlockQuote(editor)
                }}> <FormatQuoteIcon />
              </Button>

              {/* BOLD BUTTON BELOW: */}
              <Button onMouseDown={event => { event.preventDefault()
                  toggleMark(editor, "bold")
                }}> <FormatBoldIcon />
              </Button>
              {/* ITALIC BUTTON BELOW: */}
              <Button onMouseDown={event => { event.preventDefault()
                  toggleMark(editor, "italic")
                }}> <FormatItalicIcon />
              </Button>
              {/* UNDERLINE BUTTON BELOW: */}
              <Button onMouseDown={event => { event.preventDefault()
                  toggleMark(editor, "underline")
                }}> <FormatUnderlinedIcon />
              </Button>

              {/* UNORDERED LIST BUTTON BELOW: */}
              <Button onMouseDown={event => { event.preventDefault()
                  BlockEditor.toggleUL(editor)
                }}> <FormatListBulletedIcon />
              </Button>
              {/* ORDERED LIST BUTTON BELOW: */}
              <Button onMouseDown={event => { event.preventDefault()
                  BlockEditor.toggleOL(editor)
                }}> <FormatListNumberedIcon />
              </Button>
            </div>
          </Toolbar>
      </AppBar>
      {/* ABOVE: Text Editor Options Appbar */}

      {/* BELOW: Actual Slate.js Text Editor */}
      <div className="editors">
        <Slate
          editor={editor}
          value={value}
          onChange={newValue => setValue(newValue)}
        >
        <Editable
          renderElement={renderElement}
          // Pass in the `renderLeaf` function.
          renderLeaf={renderLeaf}
          // Handle SHORTCUTS BELOW:
          onKeyDown={event => {
            if (!event.ctrlKey) {
              return
            }
            switch (event.key) {
              // Shortcut for turning a text block into "code" BELOW:
              case '`': {
                event.preventDefault()
                BlockEditor.toggleCodeBlock(editor)
                break
              }
              // Shortcut for bolding BELOW:
              case 'b': {
                toggleMark(editor, "bold")
                break
              }
              // Shortcut for italics BELOW:
              case 'i': {
                toggleMark(editor, "italic")
                break
              }
              // Shortcut for underline BELOW:
              case 'u': {
                toggleMark(editor, "underline")
                break
              }
            }
          }}
        />
      </Slate>
    </div>
    {/* ABOVE: Actual Slate.js Text Editor */}

    </React.Fragment>
  );
}