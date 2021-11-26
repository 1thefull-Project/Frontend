import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import DobbyListModal from "../components/Modal/DobbyListModal";

export default function Mypage() {

    const [isShowing, setIsShowing] = useState(false);

    function openModal(){
        setIsShowing(true);
    };

    const closeModalAfter = () => {
        setIsShowing(false);
    };

    return (
        <div>
            <p>Mypage</p>
            <button onClick={openModal}>리스트 보기</button>
            <div>{isShowing && <DobbyListModal closeModalAfter={closeModalAfter}/>}</div>
        </div>
    );
}