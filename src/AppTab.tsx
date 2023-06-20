import {
	IonRouterOutlet,
	IonTabs,
	IonTabBar,
	IonTabButton,
	IonLabel,
	IonIcon,
	setupIonicReact,
} from "@ionic/react";

import { home as homeIcon, settings as settingsIcon } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import SettingsPage from "./page/SettingsPage";
import EntryPage from "./page/EntryPage";
import { useAuth } from "./auth";

setupIonicReact();

const AppTab: React.FC = () => {
	const { loggedIn } = useAuth();
	if (!loggedIn) {
		return <Redirect to="/login" />;
	}
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route exact path="/my/entries">
					<HomePage />
				</Route>
				<Route exact path="/my/entries/:id">
					<EntryPage />
				</Route>
				<Route exact path="/my/settings">
					<SettingsPage />
				</Route>
			</IonRouterOutlet>
			<IonTabBar slot="bottom">
				<IonTabButton tab="home" href="/my/entries">
					<IonIcon icon={homeIcon} />
					<IonLabel>Home</IonLabel>
				</IonTabButton>
				<IonTabButton tab="settings" href="/my/settings">
					<IonIcon icon={settingsIcon} />
					<IonLabel>Settings</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
};

export default AppTab;
