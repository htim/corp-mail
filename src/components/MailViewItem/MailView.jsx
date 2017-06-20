import * as React from "react";
import Plate from "arui-feather/plate";
import Label from "arui-feather/label";
import {Col, Row} from "react-flexbox-grid";
import moment from "moment";
import locale_ru from "moment/locale/ru"
import "./MailView.css"
import Paragraph from "arui-feather/paragraph";
import Link from "arui-feather/link";
export default class MailView extends React.Component {

    handleHideLinkClick = () => {
        const {id, onClick} = this.props;
        onClick(id);
    };

    render() {
        const {id, clientName, subject, content} = this.props;

        return (
            <div>
                <Plate isFlat={true} className="mail_view__block">
                    <Row>
                        <Col xs={10}>
                            <Label size="xl">{subject}</Label>
                            <Label size="s" className="mail_number">Письмо №1</Label>
                        </Col>
                        <Col xs={2}>
                            <Link size="s" pseudo={true} text="Скрыть" onClick={this.handleHideLinkClick}/>
                        </Col>
                    </Row>
                    <div className="empty__block_5"/>
                    <Row>
                        <Col xs={4} lg={2}>
                            <Label size="m">Получатель: </Label>
                        </Col>
                        <Col xs={8} lg={10}>
                            <Label size="m">{clientName} </Label>
                        </Col>
                    </Row>
                    <div className="empty__block_10"/>
                    <Row>
                        <Col xs={12}>
                            <div className="mail__content">
                                {this.formatContent(content)}
                            </div>
                        </Col>
                    </Row>
                </Plate>
            </div>
        )

    }

    formatDate = (date) => {
        moment.locale('ru', locale_ru);
        const momentedDate = moment(date);
        return momentedDate.format("LL");
    };

    formatContent = (content) => {
        return content.split("\\n").map((item, key) => {
            return <span><Paragraph key={key} size="m">{item}</Paragraph></span>
        })
    }

}