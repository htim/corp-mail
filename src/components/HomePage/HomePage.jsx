import * as React from "react";
import Page from "arui-feather/page";
import AppHeader from "../Header/AppHeader";
import AppTitle from "arui-feather/app-title";
import Footer from "arui-feather/footer";
import Heading from "arui-feather/heading";
import AppContent from "arui-feather/app-content";
import AppMenu from "arui-feather/app-menu";
import RadioGroup from "arui-feather/radio-group";
import Radio from "arui-feather/radio";
import "./HomePage.css"
import Link from "arui-feather/link";
import MailList from "../MailList/MailList";
import SearchBlock from "../SearchBlock/SearchBlock";
import FoldersTab from "../FoldersTab/FoldersTab";
import MailView from "../MailView/MailView";

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            checkedCount: 0,
            filtersExpanded: false
        };
    }

    generateMails = () => {
        return [
            {
                id: 1,
                clientName: "Дефект воспроизводится с длинным названием",
                subject: "Уведомление о частичной блокировке клиента Уведомление о частичной блокировке клиента",
                content: "Уважаемый клиент! \n Сообщаем вам, что в связи блаблабла Уважаемый клиент! \n Сообщаем вам, что в связи блаблаблаУважаемый клиент! \n Сообщаем вам, что в связи блаблаблаУважаемый клиент! \n Сообщаем вам, что в связи блаблабла",
                isRead: false,
                date: new Date(2017, 6, 12)
            },
            {
                id: 2,
                clientName: "Эльдорадо",
                subject: "Уведомление о снятии частичной блокировки клиента",
                content: "Lorem impsum. dsadasdasdads...",
                isRead: false,
                date: new Date(2017, 7, 12)
            },
            {
                id: 3,
                clientName: "BKM",
                subject: "subject2",
                content: "Lorem impsum. dsadasdasdads...",
                isRead: true,
                date: new Date(2017, 7, 14)
            },
            {
                id: 4,
                clientName: "BKM",
                subject: "subject2",
                content: "Lorem impsum. dsadasdasdads...",
                isRead: true,
                date: new Date(2017, 4, 12)
            },
            {
                id: 5,
                clientName: "BKM",
                subject: "subject2",
                content: "Lorem impsum. dsadasdasdads...",
                isRead: true,
                date: new Date(2017, 3, 12)
            },
            {
                id: 6,
                clientName: "BKM",
                subject: "subject2",
                content: "Lorem impsum. dsadasdasdads...",
                isRead: true,
                date: new Date(2017, 5, 12)
            },
            {
                id: 7,
                clientName: "BKM",
                subject: "subject2",
                content: "Lorem impsum. dsadasdasdads...",
                isRead: true,
                date: new Date(2017, 7, 12)
            }
        ]
    };

    render() {
        return (
            <Page header={ <AppHeader /> } footer={ <Footer fixed={true}/> }>
                <AppTitle>
                    <Heading>Корреспонденция</Heading>
                </AppTitle>
                <AppMenu>
                    <FoldersTab checkedButtonId="inbox"/>
                    <SearchBlock/>
                </AppMenu>
                <AppContent>
                    <MailList mails={this.generateMails()}/>
                </AppContent>
            </Page>
        )
    }
}


