import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";
import common_en from "./translations/en/common.json";
import common_no from "./translations/no/common.json";
import BreadBagsItemDialog_en from "./translations/en/BreadBagsItemDialog.json";
import BreadBagsItemDialog_no from "./translations/no/BreadBagsItemDialog.json";
import ItemInfoList_en from "./translations/en/ItemInfoList.json";
import ItemInfoList_no from "./translations/no/ItemInfoList.json";

i18next.init({
    interpolation: {escapeValue: false}, // React already does escaping
    lng: "no",
    resources: {
        en: {
            common: common_en,
            BreadBagsItemDialog: BreadBagsItemDialog_en,
            ItemInfoList: ItemInfoList_en
        },
        no: {
            common: common_no,
            BreadBagsItemDialog: BreadBagsItemDialog_no,
            ItemInfoList: ItemInfoList_no
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
