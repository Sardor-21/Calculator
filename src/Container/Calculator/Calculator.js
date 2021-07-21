import React, { Component } from 'react';
import './Calculator.css';
import App from "../../App/App";
import {
    FaRedo, FaMinus, FaTimes, FaWindowRestore, FaWindowMinimize, FaPlus,
    FaStarOfLife, FaSquareRootAlt, FaCalculator, FaWindowMaximize
} from 'react-icons/fa';
export default class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = { num1: "", num2: "", answer: "", a: true, b: true }
    }
    changed = (event) => {
        this.setState((state) => {
            return { num1: event.target.value }
        })
    }
    changed2 = (event) => {
        this.setState((state) => {
            return { num2: event.target.value }
        })
    }
    plus = () => {
        this.setState((state) => {
            state.answer = (this.state.num1 - 0) + (this.state.num2 - 0);
            return { answer: state.answer }
        })
    }
    minus = () => {
        this.setState((state) => {
            state.answer = this.state.num1 - this.state.num2;
            return { answer: state.answer }
        })
    }
    kopaytirish = () => {
        this.setState((state) => {
            state.answer = this.state.num1 * this.state.num2;
            return { answer: state.answer }
        })
    }
    bolish = () => {
        this.setState((state) => {
            state.answer = this.state.num1 / this.state.num2;
            return { answer: state.answer }
        })
    }
    kavadrat = () => {
        this.setState((state) => {
            state.answer = this.state.num1 * this.state.num1;
            return { answer: state.answer }
        })
    }
    ildiz = () => {
        this.setState((state) => {
            state.answer = Math.sqrt(this.state.num1);
            return { answer: state.answer }
        })
    }
    calcsize = () => {
        this.setState((state) => {
            return { a: !state.a }
        })
    }
    reload = () => {
        window.location.reload();
    }
    calchide = () => {
        this.setState((state) => {
            console.log(state);
            return { b: !state.b };
        })
    }
    render() {
        return (
            <div className="calculator d-flex justify-content-center align-items-center">
                {
                    this.state.b ? <button className="btn" onClick={this.calchide}>Calculator</button> : <div className="container calculator__container  py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 d-flex justify-content-center">
                                <div className={this.state.a ? "calculator__content" : " calculator__content calcsize"}>
                                    <div className="header d-flex justify-content-between align-items-center">
                                        <button className="button me-1" onClick={this.reload}> <FaRedo /> </button>
                                        <p className="fw-bold mb-0 d-none d-md-block">Form 1</p>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button className="me-1 button"><FaWindowMinimize /></button>
                                            {
                                                this.state.a ?
                                                    <button className="me-1 button" onClick={this.calcsize}><FaWindowRestore /></button> :
                                                    <button className="me-1 button" onClick={this.calcsize}><FaWindowMaximize /></button>
                                            }

                                            <button className="me-1 button btn_close" onClick={this.calchide}><FaTimes /></button>
                                        </div>
                                    </div>
                                    <div className="input__group mt-2">
                                        <div className="d-flex flex-column mt-2">
                                            <label htmlFor="firstnum" className="mb-1">First Number</label>
                                            <input type="text" className="form-control shadow-none" id="firstnum" onChange={this.changed} value={this.state.num1} />
                                        </div>
                                        <div className="d-flex flex-column mt-2">
                                            <label htmlFor="secondnum" className="mb-1">Second Number</label>
                                            <input type="text" className="form-control shadow-none" id="secondnum" onChange={this.changed2} value={this.state.num2} />
                                        </div>
                                        <div className="d-flex flex-column mt-2">
                                            <label htmlFor="answer" className="mb-1">Answer</label>
                                            <input type="text" className="form-control shadow-none" id="answer" value={this.state.answer} />
                                        </div>
                                        <div className="button__group d-flex justify-content-between flex-wrap">
                                            <button className="button btn__equal btn mb-2 mt-2" onClick={this.plus}>
                                                <FaPlus />
                                            </button>
                                            <button className="button btn__equal btn mb-2 mt-2" onClick={this.minus}>
                                                <FaMinus />
                                            </button>
                                            <button className="button btn__equal btn mb-2 mt-2" onClick={this.kopaytirish}>
                                                <FaStarOfLife />
                                            </button>
                                            <button className="button btn__equal fw-bold btn" onClick={this.bolish}>
                                                /
                                            </button>
                                            <button className="button btn__equal btn" onClick={this.ildiz}>
                                                <FaSquareRootAlt />
                                            </button>
                                            <button className="button btn__equal btn" onClick={this.kavadrat}>
                                                <FaCalculator />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        )
    }
}
