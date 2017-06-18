import * as React from "react";
import Header from "arui-feather/header";
import Menu from "arui-feather/menu";
import User from "arui-feather/user";
import Support from "arui-feather/support";

export default class AppHeader extends React.Component {

    render() {
        return (
            <Header
                menu={
                    <Menu
                        view="horizontal"
                        content={
                            [
                                {content: 'Главная', value: 'section1'},
                                {content: 'Продукты', value: 'section2'}
                            ]
                        }
                    />
                }
                user={
                    <User
                        url="#"
                        text="Иванов Иван Иванович"
                    />
                }
                logo={
                    <img src='https://rawgit.com/alfa-laboratory/arui-feather/master/logo.svg' />
                }
                support={
                    <Support
                        city='Город'
                        phone='+7 123 123 12 31'
                    />
                }
                fixed={ true }
            />
        )
    }
}