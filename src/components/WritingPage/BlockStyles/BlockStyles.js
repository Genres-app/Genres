import React from "react";
import BlockStyleButton from "./BlockStyleButton";
import HeaderStyleDropdown from "./HeaderStyleDropdown";
import Button from '@material-ui/core/Button';

export const BLOCK_TYPES = [
	{ label: " “Blockquote” ", style: "blockquote" },
	{ label: "UL", style: "unordered-list-item" },
	{ label: "OL", style: "ordered-list-item" },
];

export const HEADER_TYPES = [
	{ label: "No Heading Style", style: "unstyled" },
	{ label: "Heading 1", style: "header-one" },
	{ label: "Heading 2", style: "header-two" },
	{ label: "Heading 3", style: "header-three" },
	{ label: "Heading 4", style: "header-four" },
	{ label: "Heading 5", style: "header-five" },
	{ label: "Heading 6", style: "header-six" }
];

export function getBlockStyle(block) {
	switch (block.getType()) {
		case "blockquote":
			return "RichEditor-blockquote";
		default:
			return null;
	}
}

class BlockStyles extends React.Component {
	render() {
		const { editorState } = this.props;
		const selection = editorState.getSelection();
		const blockType = editorState
			.getCurrentContent()
			.getBlockForKey(selection.getStartKey())
			.getType();

		return (
			<span className="RichEditor-controls">
				<HeaderStyleDropdown
					headerOptions={HEADER_TYPES}
					active={blockType}
					onToggle={this.props.onToggle}
				/>

				{BLOCK_TYPES.map(type => {
					return (
						<Button style={{textTransform: 'none'}}><BlockStyleButton
							active={type.style === blockType}
							label={type.label}
							onToggle={this.props.onToggle}
							style={type.style}
							key={type.label}
							type={type}
						/></Button>
					);
				})}
			</span>
		);
	}
}

export default BlockStyles;
