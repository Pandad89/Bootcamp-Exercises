import React from "react";
import Q1 from "./Q1";
import Q2 from "./Q2";
import QuizTitle from "./QuizTitle";

class Quiz extends React.Component {
    render () {
        return (
            <div>
                <QuizTitle />
                <Q1 />
                <Q2 />
            </div>
        )
    }
}

export default Quiz;