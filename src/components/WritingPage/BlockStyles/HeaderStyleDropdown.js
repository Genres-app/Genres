import React from "react";
import Typography from '@material-ui/core/Typography';

class HeaderStyleDropdown extends React.Component {
	onToggle = event => {
		let value = event.target.value;
		this.props.onToggle(value);
	};

	render() {
		return (
			<select value={this.props.active} onChange={this.onToggle} style={{marginRight:'10px'}}>
				{this.props.headerOptions.map(heading => {
					return <option value={heading.style}>{heading.label}</option>;
				})}
			</select>
		);
	}
}

export default HeaderStyleDropdown;
