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
import MainScreen from "../MainScreen/MainScreen";
import { BrowserRouter, Route, Redirect } from "react-router-dom"

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false,
            checkedCount: 0,
            filtersExpanded: false
        };
    }

    render() {
        return (
            <Page header={<AppHeader />} footer={<Footer fixed={true} />}>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" render={() => (<Redirect to="/inbox" />)} />
                        <Route exact path="/:folder" component={MainScreen} />
                        <Route exact path="/message/:id" component={MailView} />
                    </div>
                </BrowserRouter>
            </Page>
        )
    }
}


