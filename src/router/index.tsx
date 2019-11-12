import React from 'react'
import { Router, Stack, Scene, Lightbox, Modal, Drawer, Tabs } from 'react-native-router-flux'
import Login from '../scene/Login'
import Home from '../scene/Home'
import My from '../scene/My'
import Collect from '../scene/Collect'

const router = () =>(
    <Router>
        
        <Modal key='root' hideNavBar>
            <Scene>
                <Scene hideNavBar key="Login" component={Login} />
            </Scene>
            <Scene>
                <Scene key='Tabbar' hideNavBar>
                    <Tabs key='tabbar'>
                        <Scene hideNavBar key="Home" component={Home} tabBarLabel={'首页'}/>
                        <Scene hideNavBar key="My" component={My} tabBarLabel={'我的'}/>
                    </Tabs>
                </Scene>
                <Scene hideNavBar key="Collect" component={Collect} />
            </Scene>

        </Modal>


    </Router>
)

export default router







