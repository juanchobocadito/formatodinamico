import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Select from "react-select";

const options=[
    {id:1, value:"pizza", label:"Pizza 🍕"},
    {id:2, value:"hogdot", label:"hotdog 🌭 "},
    {id:3, value:"play", label:"Hamburguesa 🍔"},
    {id:4, value:"music", label:"Chicken 🍗"},
    {id:5, value:"photo", label:"Meat 🥩"},
    {id:6, value:"swim", label:"French fries 🍟"},
    {id:7, value:"run", label:"Shrimp 🍤 "},
];
/*
<Select 
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />*/
export default function Pasoc() {
    const [selectOption, setSelectOption]=useState(null);
    const comidasSer= JSON.stringify(selectOption);
    localStorage.setItem("comidas", comidasSer);
    const onChangeAdditionalcomidas = (e) =>{
        const sport = e.target.value;
        localStorage.setItem("additionalcomidas", sport);
    };
    return (
        <div>
            <h2>Select your favourite Food</h2>
            <h4>Tell me about your Foods</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                    <Col lg="7">
                        <h5>Select your Food</h5>
                        <Select 
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />
                    </Col>
                    <Col lg="7" className="mt-4">
                        <h5>Do you want to add more</h5>
                        <Form.Control
                            type="text"
                            placeholder=" "
                            onChange={(e) => onChangeAdditionalcomidas(e)}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
