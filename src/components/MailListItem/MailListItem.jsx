import * as React from "react";
import Plate from "arui-feather/plate";
import Label from "arui-feather/label";
import "./MailListItem.css"
import {Col} from "react-flexbox-grid"

export default class MailListItem extends React.Component {

    handleOnClickPlate = () => {
        const {id, onClick} = this.props;
        onClick(id);
    }

    render() {

        const {clientName, subject, content, isRead} = this.props;

        return (
            <Plate isFlat={true} className="mail__block" onClick={this.handleOnClickPlate}>
                <Col xs={4}>
                    <div className="ellipsis_box">
                        <Label size="m" isNoWrap={true}
                               className={isRead ? "" : "label__bold"}>
                            {clientName}
                        </Label>
                    </div>
                </Col>
                <Col xs={8}>
                    <div>
                        <div className="ellipsis_box">
                            <Label size="m" isNoWrap={true}
                                   className={isRead ? "" : "label__bold"}>
                                {subject}
                            </Label>
                        </div>
                        <div className="ellipsis_box">
                            <Label size="s" className="mail__content" isNoWrap={true}>
                                {content}
                            </Label>
                        </div>
                    </div>
                </Col>
            </Plate>
        )
    }

}