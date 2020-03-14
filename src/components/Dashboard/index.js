import React from 'react';
import { Route } from 'react-router-dom';
import Container from "./conatiner/conatiner"



class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => {
                    return <React.Fragment>
                        <Container />

                    </React.Fragment>
                }
                }
                />
               


                
            </div>
        )
    }
}

export default Dashboard;