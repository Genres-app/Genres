// Import React dependencies.
import React, { useEffect, useCallback, useMemo, useState, useImperativeHandle, forwardRef, useRef } from 'react';
// Import the Slate editor factory.
import { createEditor, Editor, Transforms, Element as SlateElement } from 'slate';
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';
// Import withHistory to allow for redo and undo functions
import { withHistory } from 'slate-history';

import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField,
  CardActionArea,
  Divider,
  Grow,
  Tooltip,
  Menu,
  MenuItem,
  useTheme
} from '@material-ui/core';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';

import clsx from 'clsx';
import GenresDrawer from '../Drawer/Drawer';

import ColorThief from 'colorthief';

/*Material-UI Icons*/
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddIcon from '@material-ui/icons/Add';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

/*Mdi Icons*/
import Icon from '@mdi/react';
import {
  mdiBookCogOutline,
  mdiContentSaveOutline,
  mdiPublish,
  mdiNoteTextOutline,
  mdiDockLeft,
  mdiViewSplitVertical,
  mdiDotsVertical,
  mdiChevronDown,
  mdiUndo,
  mdiRedo
} from '@mdi/js';
import mdiSavedOutline from './svgs/content-save-check-outline.svg';

/*Data Import*/
import { writingNoteData } from './WritingNoteData';
import { BookLib } from '../BookLib';
import RgbaInterpolate from '../../utilities/RgbaInterpolate';
import hexToRgb from '../../utilities/HexToRgb';
import StickyNote from './stickyNote';
import { NoteLib } from './NoteLib';
import Add from '@material-ui/icons/Add';


import CopyrightDialog from './AgreeWithCopyright';

// HELP from https://docs.slatejs.org/walkthroughs/01-installing-slate
// HELP from https://github.com/ianstormtaylor/slate/blob/main/site/examples/richtext.tsx
// The text editor BELOW consists of the Slate.js framework for building
// rich text editors. It's implementation as of now should only be
// considered a placeholder for more ambitious plans for a text editor.
// This text editor as of now is very BASIC and NOT connected to a
// backend currently.

// useStyles is the CSS for the text editor, edit BELOW:
const useStyles = makeStyles((theme) => ({
  // BELOW: CSS for Appbar itself
  AppBar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[0],
  },

  bookCoverInAppbar: {
    height: 64,
    width: 40,
    backgroundColor: '#ccc',
    position: 'relative',
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  chapterNoInput: {
    width: '6rem',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  chapterNameInput: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  appbarIconBtn: {
    marginRight: theme.spacing(1),
  },
  barDivider: {
    margin: theme.spacing(2),
  },
  barSaveBtnsContainer: {
    position: 'relative',
    marginLeft: theme.spacing(1),
  },
  barBtnNoSave: {
    position: "absolute",
    left: 0,
    color: "#fff",
    backgroundColor: "#e53935",

    "&:hover": {
      backgroundColor: "#b71c1c"
    }
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
  // chName: {
  //   width: '20%',
  //   height: '20px',
  //   marginTop: '10px',
  //   marginBottom: '50px',
  // },
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

  /*Editor Tool Bar */
  EditorToolbar: {
    position: 'fixed',
    top: 64,
    width: '100%',
    height: 41,
    padding: theme.spacing(.5),
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    borderTop: `1px solid ${theme.palette.divider}`,

    "& > button": {
      margin: `0 ${theme.spacing(.5)}px`,

      "&:hover": {
        backgroundColor: 'rgba(255,255,255,.04)',
      },
    }
  },
  EditorToolbarDivider: {
    backgroundColor: theme.palette.background.paper,
  },

  EditorToolbarMain: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    "& > button": {
      margin: `0 ${theme.spacing(.5)}px`,
      // color: theme.palette.background.paper,

      "&:hover": {
        backgroundColor: 'rgba(255,255,255,.04)',
      },
    }
  },


  /* Side Notes Section */

  sideNotesToggle: {
    // position: 'fixed',
    // top: 120,
    // left: 16,
  },
  sideNotesCloseBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    width: "100%",
  },

  sideNotes: {
    // position: 'fixed',
    // top: 105,
    marginTop: 105,
    width: 400,
    minWidth: 400,
    maxWidth: "50vw",
    height: "calc(100vh - 105px)",
    // transform: "translateX(-100%)",
    transition: 'transform .2s ease-in-out',
    backgroundColor: theme.palette.background.paper,
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
  },

  sideNotesResizeBar: {
    height: "calc(100vh - 105px)",
    marginTop: 105,
    width: 10,
    borderRight: "1px solid",
    borderRightColor: theme.palette.divider,
    backgroundColor: theme.palette.background.paper,
    transition: 'transform .2s ease-in-out, background-color .2s',
    userSelect: "none",
    cursor: "col-resize",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    "&:hover": {
      backgroundColor: theme.palette.divider,
    }
  },

  notesTree: {
    width: 199,
    flexShrink: 0,
    padding: theme.spacing(1),
    userSelect: "none",
    backgroundColor:
      RgbaInterpolate(
        hexToRgb(theme.palette.background.paper).r,
        hexToRgb(theme.palette.background.paper).g,
        hexToRgb(theme.palette.background.paper).b, 1,
        .4, 128, 128, 128, 1, true),
    // color: theme.palette.background.paper,
    transition: 'background-color .2s, color .2s',
  },
  addNewNoteBtn: {
    margin: theme.spacing(1),
  },
  noteCards: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& textarea": {
      resize: "none",
      minHeight: 100,
      margin: theme.spacing(1),
      marginBottom: theme.spacing(.5),
      padding: theme.spacing(1),
      borderRadius: theme.spacing(1),
      fontSize: "1rem",
      fontFamily: theme.typography.fontFamily,
    }
  },
  editor: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid rgba(128, 128, 128, 0.4)",
    borderRadius: 8,
    maxWidth: 720,
    minHeight: "calc(100vh - 152px)",
    padding: "5em",
    margin: "128px auto 0 auto",
    fontFamily: 'Open Sans',
    fontSize: "90%",
  }
}));

// Edit to change Button outline colors BELOW:
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       // Change the hex here as needed:
//       main: '#49d6af',
//     },
//   }
// });

export default function WPEditor({ theme, passTheme }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const classes = useStyles();
  const usedTheme = useTheme();
  //dialog
  const [open, setOpen] = React.useState(false);
  const handleDiaOpen = () => {
    setOpen(true);
  };

  const handleDiaClose = () => {
    setOpen(false);
  };


  const colorThief = new ColorThief();

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  const [sideNotesOn, setSideNotes] = useState(true);
  const toggleSideNotes = () => setSideNotes(!sideNotesOn);

  // Force Re-render
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  // Side Notes Column Resizing Part(1/4)
  const [sideNotesResizing, setSideNotesResizing] = useState(false);
  // Side Notes Column Resizing Part(2/4)
  const [sideNoteWidth, setSideNoteWidth] = useState(400);
  const SN = document.getElementById("SideNotes");
  document.onmousemove = function (e) {
    if (sideNotesResizing) {
      let newSideNotesWidth = e.clientX;
      SN.style.width = newSideNotesWidth - 5 + "px";
      // setSideNoteWidth(newSideNotesWidth - 5 + "px")
    }
  }
  useEffect(
    () => {

      // Update Toggle SideNotes
      if (sideNotesOn) {
        document.getElementById("NotesAndEditorContainer").style.width = "100%"
      } else {
        document.getElementById("NotesAndEditorContainer").style.width = window.innerWidth + document.getElementById("SideNotes").offsetWidth + 10 + "px"
      }

      // Update color of NotesTree's container when bookcover is loaded
      /*const img = document.querySelector('#bookCover');
      img.onload = function () {
        let colorOfBookCover = colorThief.getColor(img);
        let eleNotesTreeContainer = document.getElementById("notesTreeContainer")
        eleNotesTreeContainer.style.backgroundColor = `rgb(${colorOfBookCover[0]},${colorOfBookCover[1]},${colorOfBookCover[2]})`;
        if (colorOfBookCover[0] + colorOfBookCover[1] + colorOfBookCover[2] > 255 * 3 / 2) {
          eleNotesTreeContainer.style.color = '#000';
        } else {
          eleNotesTreeContainer.style.color = '#fff';
        }
      }*/

    }
  )

  // Side Notes Column Resizing Part(3/4)
  document.onmouseup = function (e) {
    setTimeout(function () { setSideNotesResizing(false); }, 0)
    // console.log(sideNotesResizing);
  }

  const [NotesList, setNotesList] = useState(NoteLib);

  const handleAddStickyNote = () => {
    let tempList = NotesList;
    tempList.push({ p: "New Note" });
    setNotesList(tempList);
    forceUpdate();
  }

  const handleDelStickyNote = (index) => {
    let tempList = NotesList;
    tempList.splice(index, 1);
    setNotesList(tempList);
    forceUpdate();
  }

  const handleChangeStickyNoteP = (index, newP) => {
    let tempList = NotesList;
    tempList.at(index).p = newP;
    setNotesList(tempList);
    forceUpdate();
  }

  const handleNoteChangeColor = (index, color) => {
    let tempList = NotesList;
    tempList.at(index).color = color;
    setNotesList(tempList);
    forceUpdate();
  }

  const [isSaved, setSaved] = useState(false);

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
      case 'ol': return <OLElement {...props} />
      default: return <DefaultElement {...props} />
    }
  }, [])
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
      <ul {...props.attributes} style={{ display: 'list-item', fontSize: '18px' }}>{props.children}</ul>
    )
  }
  // Define a React component renderer for ordered list.
  const OLElement = props => {
    return (
      <ol {...props.attributes} style={{ display: 'list-item', fontSize: '18px' }}>{props.children}</ol>
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
      <pre {...props.attributes} style={{ fontFamily: 'times new roman', fontSize: '18px' }}>
        <blockquote><p><em>{props.children}</em></p></blockquote>
      </pre>
    )
  }
  // Default Element;
  const DefaultElement = props => {
    return <p style={{ fontSize: '18px' }}{...props.attributes}>{props.children}</p>
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const childRef = useRef();

  const chapters = [
    [1, 'ChapterA'],
    [2, 'ChapterB'],
    [3, 'ChapterC'],
    [4, 'ChapterD'],
    [4.5, 'ChapterD+'],
    [5, 'ChapterE']
  ]

  document.body.style.margin = "0 0 0 0";

  return (
    <>
      {/* BELOW: Top Appbar */}
      <CssBaseline>
        <AppBar
          position="fixed"
          elevation={1}
          className={classes.AppBar}
        >
          <Toolbar>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleSidebar}
              edge="start"
            >
              <MenuIcon />
            </IconButton>

            {/* <IconButton
              color="inherit"
              aria-label="back"
              onClick={() => { window.history.back() }}
            >
              <ArrowBackIcon />
            </IconButton> */}
            {/* <div className={classes.bookCoverInAppbar} id="bookCover" style={{ backgroundImage: `url(${BookLib["0001"].cover})` }}>
            </div> */}
            <img src={BookLib["0001"].cover} className={classes.bookCoverInAppbar} id="bookCover" />
            <Tooltip title="Select Chapter">
              <IconButton
                color="inherit"
                aria-label="chapterSelector"
                onClick={handleClick}
              >
                <Icon path={mdiChevronDown} size={1} />
              </IconButton>
            </Tooltip>

            <Menu
              id="chapter-select-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              PaperProps={{
                style: {
                  maxHeight: '10rem',
                },
              }}
            >
              {chapters.map((item, index) => (
                <MenuItem onClick={handleClose}>{item[0] + " " + item[1]}</MenuItem>
              ))}
            </Menu>

            <TextField
              className={classes.chapterNoInput}
              label="Ch. No."
              variant="outlined"
              size="small"
            />
            <TextField
              className={classes.chapterNameInput}
              label="Chapter Name"
              variant="outlined"
              id="mui-theme-provider-filled-input"
              size="small"
            />

            <Tooltip title="Book Setting">
              <IconButton
                color="inherit"
                aria-label="settings"
                // onClick={}
                className={classes.appbarIconBtn}
              >
                <Icon path={mdiBookCogOutline} size={1} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Undo">
              <IconButton
                color="inherit"
                aria-label="undo"
                // onClick={() => { window.history.back() }}
                className={classes.appbarIconBtn}
              >
                <Icon path={mdiUndo} size={1} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Redo">
              <IconButton
                color="inherit"
                aria-label="redo"
                // onClick={() => { window.history.back() }}
                className={classes.appbarIconBtn}
              >
                <Icon path={mdiRedo} size={1} />
              </IconButton>
            </Tooltip>

            <div style={{ flexGrow: 1 }} />

            <IconButton id="ThemeToggle" aria-label="Toggle Theme" color="inherit" onClick={() => passTheme(!theme)}
              className={classes.appbarIconBtn}>
              {!theme ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            <Button
              variant="text"
              color="primary"
              // className={classes.button}
              onClick={() => childRef.current.handleOpenDia()}
              startIcon={<Icon path={mdiPublish} size={1} />}
            >
              Publish
            </Button>
            <CopyrightDialog ref={childRef} />

            <div
              open={open}
            >
              {open ?
                <div onClick={handleDiaClose}>
                  <CopyrightDialog />
                </div> : " "}
            </div>

            <Divider orientation="vertical" flexItem className={classes.barDivider} />
            <Typography variant="caption">{
              !isSaved ?
                "Autosave 4 minutes ago"
                :
                "Saved!"
            }</Typography>

            <div className={classes.barSaveBtnsContainer}>
              <Tooltip title="Save">
                <IconButton
                  color="inherit"
                  aria-label="add to book"
                  className={classes.barBtnSave}
                // onClick={}
                >
                  <div style={{ backgroundImage: `url(${mdiSavedOutline})`, backgroundSize: "cover", width: 24, height: 24 }}></div>
                </IconButton>
              </Tooltip>
              <Grow
                in={!isSaved}
              >
                <Tooltip title="Save">
                  <IconButton
                    color="inherit"
                    aria-label="add to book"
                    className={classes.barBtnNoSave}
                    onClick={() => {
                      setTimeout(() => {
                        setSaved(true)
                      }, 1000)
                    }}
                  >
                    <Icon path={mdiContentSaveOutline} size={1} />
                  </IconButton>
                </Tooltip>
              </Grow>
            </div>

          </Toolbar>
        </AppBar>
        {/* ABOVE: Top Appbar */}

        {/* BELOW: Text Editor Options Appbar */}
        {/* This Appbar has a DIFFERENT CSS sheet: WPEditor.css */}
        <div className={classes.EditorToolbar}>
          <Button
            aria-label="toggle side notes"
            className={classes.sideNotesToggle}
            onClick={toggleSideNotes}
            startIcon={
              <Icon path={mdiNoteTextOutline} size={1} />}
          >
            Toggle Side Notes
          </Button>

          <Divider orientation="vertical" className={classes.EditorToolbarDivider} />
          {/* <div style={{ flexGrow: 1 }}></div> */}
          <div className={classes.EditorToolbarMain} >
            {/* HEADING 1 BUTTON BELOW: */}
            <Button onMouseDown={event => {
              event.preventDefault()
              BlockEditor.toggleHeadingOne(editor)
            }}> H1
            </Button>
            {/* HEADING 2 BUTTON BELOW: */}
            <Button onMouseDown={event => {
              event.preventDefault()
              BlockEditor.toggleHeadingTwo(editor)
            }}> H2
            </Button>
            {/* CODE BLOCK BUTTON BELOW: */}
            <Button onMouseDown={event => {
              event.preventDefault()
              BlockEditor.toggleCodeBlock(editor)
            }}> Code Block
            </Button>
            {/* BLOCK QUOTE BUTTON BELOW: */}
            <Button onMouseDown={event => {
              event.preventDefault()
              BlockEditor.toggleBlockQuote(editor)
            }}> <FormatQuoteIcon />
            </Button>

            {/* BOLD BUTTON BELOW: */}
            <Button onMouseDown={event => {
              event.preventDefault()
              toggleMark(editor, "bold")
            }}> <FormatBoldIcon />
            </Button>
            {/* ITALIC BUTTON BELOW: */}
            <Button onMouseDown={event => {
              event.preventDefault()
              toggleMark(editor, "italic")
            }}> <FormatItalicIcon />
            </Button>
            {/* UNDERLINE BUTTON BELOW: */}
            <Button onMouseDown={event => {
              event.preventDefault()
              toggleMark(editor, "underline")
            }}> <FormatUnderlinedIcon />
            </Button>

            {/* UNORDERED LIST BUTTON BELOW: */}
            <Button onMouseDown={event => {
              event.preventDefault()
              BlockEditor.toggleUL(editor)
            }}> <FormatListBulletedIcon />
            </Button>
            {/* ORDERED LIST BUTTON BELOW: */}
            <Button onMouseDown={event => {
              event.preventDefault()
              BlockEditor.toggleOL(editor)
            }}> <FormatListNumberedIcon />
            </Button>
          </div>
        </div>

        {/* ABOVE: Text Editor Options Appbar */}
        <div style={{ width: '100%', overflow: 'hidden', height: '100vh' }}>
          {/* Double Divs are used for Toggling SideNote: Change inner div's width to move SideNote out of viewport */}
          <div style={{ display: 'flex', float: 'right', transition: 'width .2s cubic-bezier(0.21, 0.73, 0.3, 1)' }} id={"NotesAndEditorContainer"}>

            <div className={classes.sideNotes} id={"SideNotes"} style={{ width: sideNoteWidth }}>

              <div style={{ display: "flex", height: "100%" }}>
                <div className={classes.notesTree} id="notesTreeContainer">
                  <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                  >
                    {
                      Object.keys(writingNoteData).map((key, index) => (
                        <TreeItem nodeId={index} label={key} />
                      ))
                    }

                    <TreeItem nodeId="1" label="Characters">
                      <TreeItem nodeId="2" label="Char1" />
                      <TreeItem nodeId="3" label="Char2" />
                      <TreeItem nodeId="4" label="Char3" />
                    </TreeItem>
                    <TreeItem nodeId="5" label="Others">
                      <TreeItem nodeId="10" label="Settings" />
                      <TreeItem nodeId="6" label="Factions">
                        <TreeItem nodeId="8" label="Faction1" />
                        <TreeItem nodeId="9" label="Faction2" />
                      </TreeItem>
                    </TreeItem>
                  </TreeView>
                </div>
                <Divider orientation="vertical" />
                <div className={classes.noteCards}>
                  {/* <Button
                    aria-label="add new note"
                    className={classes.addNewNoteBtn}
                    // onClick={toggleSideNotes}
                    startIcon={<AddIcon />}
                    color="primary"
                  >
                    New Note
                  </Button>
                  <textarea></textarea>
                  <textarea></textarea> */}
                  <div style={{ width: "100%", height: "100%", overflowY: "scroll" }}>
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>
                      <Button onClick={() => handleAddStickyNote()} startIcon={<Add />}>Add Sticky</Button>
                    </div>
                    {NotesList.map((item, index) => (
                      <StickyNote p={item.p} color={item.color} index={index} funcDeleteSelf={handleDelStickyNote} funcChangeSelf={handleChangeStickyNoteP} funcChangeColor={handleNoteChangeColor} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.sideNotesResizeBar}
              // Side Notes Column Resizing Part(4/4)
              onMouseDown={() => setSideNotesResizing(true)}
            >
              <div style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                width: 10,
                opacity: .3,
              }}>
                <Icon path={mdiDotsVertical} size={1} style={{ flexShrink: 0 }} />
              </div>
            </div>

            {/* BELOW: Actual Slate.js Text Editor */}
            <div className={classes.editor} style={{ width: 720 }}>
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
          </div>
        </div>

        <GenresDrawer open={sidebar} theme={theme} toggleFunc={toggleSidebar} user={user} isUserConfirmRequired={true} />
      </CssBaseline>

    </>
  );
}