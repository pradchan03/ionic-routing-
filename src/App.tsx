import { IonApp, setupIonicReact } from "@ionic/react";

import { IonReactRouter } from "@ionic/react-router";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "./auth";
import AppTab from "./AppTab";
import LoginPage from "./page/LoginPage";
import NotFoundPage from "./page/NotFoundPage";

setupIonicReact();

const App: React.FC = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	console.log(`rendering App with loggedIn=${loggedIn}`);
	return (
		<IonApp>
			<AuthContext.Provider value={{ loggedIn }}>
				<IonReactRouter>
					<Switch>
						<Route exact path="/login">
							<LoginPage onLogin={() => setLoggedIn(true)} />
						</Route>
						<Route path="/my">
							<AppTab />
						</Route>
						<Redirect exact path="/" to="/my/entries" />
						<Route>
							<NotFoundPage />
						</Route>
					</Switch>
				</IonReactRouter>
			</AuthContext.Provider>
		</IonApp>
	);
};

export default App;
