import * as React from "react";
import Label from "arui-feather/label";
import "../HomePage/HomePage.css"
import * as _ from "lodash"
import moment from "moment";
import locale_ru from "moment/locale/ru"
import {Col, Row} from "react-flexbox-grid"
import MailListItem from "../MailListItem/MailListItem";
import MailView from "../MailView/MailView";

export default class MailList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expandedIds: []
        }
    }

    expandMailView = (id) => {
        this.setState((prevState) => {
            const appended = prevState.expandedIds;
            appended.push(id);
            return {
                expandedIds: appended
            }
        })
    };

    hideMailView = (id) => {
        this.setState((prevState) => {
            const filtered = prevState.expandedIds.filter(i => i !== id);
            return {
                expandedIds: filtered
            }
        })
    }


    renderMails = () => {

        const items = this.props.mails;

        const indexedItems = _.chain(items)
            .groupBy(x => x.date)
            .map((val, key) => {
                return {
                    date: key,
                    mails: val
                }
            })
            .value();

        return (
            indexedItems.map(d => {
                return (
                    <div>
                        <Label size="m">{this.formatDate(d.date)}</Label>
                        {d.mails.map(i => {
                            let item;
                            if (!this.state.expandedIds.includes(i.id)) {
                                item =
                                    <Row>
                                        <Col xs={12}>
                                            <MailListItem
                                                key={i.id}
                                                id={i.id}
                                                clientName={i.clientName}
                                                subject={i.subject}
                                                content={i.content}
                                                isRead={i.isRead}
                                                onClick={this.expandMailView}
                                            />
                                        </Col>
                                    </Row>;
                            } else {
                                item =
                                    <MailView
                                        id={i.id}
                                        clientName={i.clientName}
                                        subject={i.subject}
                                        content={i.content}
                                        onClick={this.hideMailView}
                                    />
                            }
                            return (
                                item
                            )
                        })
                        }
                    </div>
                )
            })
        );
    };

    formatDate = (date) => {
        moment.locale('ru', locale_ru);
        const momentedDate = moment(date);
        return momentedDate.format("LL");
    };

    render() {
        return (
            <div>
                {this.renderMails()}
            </div>
        )
    }
}