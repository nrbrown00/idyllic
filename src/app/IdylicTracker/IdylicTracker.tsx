"use client"
import { useState } from "react";
import Styles from "./Styles";

type CloneOrder = "cardinal" | "intercardinal";
type Safe = "front / back safe" | "side safe";
type EffectOrder = "stack" | "defam";
type Tower = "switch" | "stay";

type Tether = {
    position: string;
    number: number;
    type: "STACK" | "DEFAM";
    defam: number | null;
    party: 1 | 2;
    direction: 'LEFT' | 'RIGHT'
};

const TETHERS: Tether[] = [
    { position: "N",  number: 1, type: "STACK", defam: null, party: 1 , direction: 'LEFT'},
    { position: "NE", number: 2, type: "STACK", defam: null, party: 1 , direction: 'LEFT'},
    { position: "E",  number: 3, type: "STACK", defam: null, party: 2, direction: 'RIGHT' },
    { position: "SE", number: 4, type: "STACK", defam: null, party: 2, direction: 'RIGHT' },
    { position: "S",  number: 5, type: "DEFAM", defam: 1, party: 1, direction: 'LEFT' },
    { position: "SW", number: 6, type: "DEFAM", defam: 2, party: 1 , direction: 'LEFT'},
    { position: "W",  number: 7, type: "DEFAM", defam: 1, party: 2 , direction: 'RIGHT'},
    { position: "NW", number: 8, type: "DEFAM", defam: 2, party: 2 , direction: 'RIGHT'},
];

export default function IdylicTracker() {
    const [cloneOrder, setCloneOrder] = useState<CloneOrder | null>(null);
    const [tether, setTether] = useState<Tether | null>(null);
    const [safe, setSafe] = useState<Safe | null>(null);
    const [effectOrder, setEffectOrder] = useState<EffectOrder | null>(null);
    const [tower, setTower] = useState<Tower | null>(null);

    const reset = () => {
        setCloneOrder(null);
        setTether(null);
        setSafe(null);
        setEffectOrder(null);
        setTower(null);
    };

    const selectTether = (number: number) => {
        setTether(TETHERS[number - 1]);
    };

    return (
        <div className="idylic-tracker">

            {/* REMINDERS */}
            <div className="reminders">

                {/* 1 - TETHER / EFFECT ORDER */}
                <div className="reminder">
                    <div className="reminder-number">1</div>

                    <div className="reminder-content" style={{display: 'flex', alignItems: 'center'}}>
                        {tether ? (
                            <> 
                            
                                <strong style={{fontSize: '4rem', marginTop: '-0.7rem'}}>
                                    {tether.direction === "LEFT" ? "←" : "→"}
                                </strong>
                                
                                <strong>
                                    LP{tether.party}
                                </strong>

                                <span style={{color: tether.type === 'DEFAM' ? 'red' : 'yellow'}}>
                                    {tether.type}
                                    {tether.defam ? (
                                        <span className="number-badge">{tether.defam}</span>
                                    ) : null}
                                   
                                </span>
                            </>
                        ) : (
                            <span className="empty">
                                TETHER
                            </span>
                        )}

                        {effectOrder && (
                            <span className="secondary-text" style={{color: effectOrder === 'defam' ? 'red' : 'yellow'}}>
                                {effectOrder.toUpperCase()} FIRST {effectOrder === 'defam' ? (<span className="number-badge" style={{height: '12px', width: '12px'}}/>) : null}
                            </span>
                        )}
                    </div>
                </div>

                {/* 2 - TOWER */}
                <div className="reminder">
                    <div className="reminder-number">2</div>

                    <div className="reminder-content">
                        {tower ? (
                            <strong style={{color: tower === 'stay' ? 'red' : 'green'}}>
                                TOWER {tower.toUpperCase()} {tower === "stay" ? '◆' : '⇄'}
                            </strong>
                        ) : (
                            <span className="empty">
                                TOWER
                            </span>
                        )}
                    </div>
                </div>

                {/* 3 - SAFE */}
                <div className="reminder">
                    <div className="reminder-number">3</div>

                    <div className="reminder-content">
                        {safe ? (
                            <strong>
                               {safe === 'front / back safe' ? (<span style={{fontSize: '1.5rem'}}>↕</span>) : <span style={{fontSize: '1.5rem'}}>↔</span>} {safe.toUpperCase()}
                            </strong>
                        ) : (
                            <span className="empty">
                                SAFE
                            </span>
                        )}
                    </div>
                </div>

                {/* 4 - CLONE ORDER */}
                <div className="reminder">
                    <div className="reminder-number">4</div>

                    <div className="reminder-content">
                        {cloneOrder ? (
                            <strong>
                                {cloneOrder === "cardinal" ? '✚' : '✕'} {cloneOrder.toUpperCase()} FIRST
                            </strong>
                        ) : (
                            <span className="empty">
                                CLONE ORDER
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* CONTROLS */}
            <div className="controls">

                {/* CLONE ORDER */}
                <div className="section">
                    <div className="section-title">
                        CLONES
                    </div>

                    <div className="button-grid two">
                        <button
                            className={
                                cloneOrder === "cardinal"
                                    ? "selected"
                                    : ""
                            }
                            onClick={() =>
                                setCloneOrder("cardinal")
                            }
                        >
                            ✚ CARDINAL
                        </button>

                        <button
                            className={
                                cloneOrder === "intercardinal"
                                    ? "selected"
                                    : ""
                            }
                            onClick={() =>
                                setCloneOrder("intercardinal")
                            }
                        >
                            ✕ INTERCARDINAL
                        </button>
                    </div>
                </div>

                {/* TETHER */}
                <div className="section">
                    <div className="section-title">
                        TETHER
                    </div>

                    <div className="tether-box" >

                        {/* 8 - NW */}
                        <button
                            className={tether?.number === 8 ? "selected" : ""}
                            onClick={() => selectTether(8)}
                            style={{fontSize: '2rem', color: tether?.number === 4 ? 'yellow' : tether?.number === 8 ?  'red' : 'white'}}
                        >
                            8
                        </button>

                        {/* 1 - N */}
                        <button
                            className={tether?.number === 1 ? "selected" : ""}
                            onClick={() => selectTether(1)}
                            style={{fontSize: '2rem', color: tether?.number === 1 ? 'yellow' : tether?.number === 5 ?  'red' : 'white'}}
                        >
                            1
                        </button>

                        {/* 2 - NE */}
                        <button
                            className={tether?.number === 2 ? "selected" : ""}
                            onClick={() => selectTether(2)}
                            style={{fontSize: '2rem', color: tether?.number === 1 ? 'yellow' : tether?.number === 5 ?  'red' : 'white'}}
                        >
                            2
                        </button>

                        {/* 7 - W */}
                        <button
                            className={tether?.number === 7 ? "selected" : ""}
                            onClick={() => selectTether(7)}
                            style={{fontSize: '2rem', color: tether?.number === 4 ? 'yellow' : tether?.number === 8 ?  'red' : 'white'}}
                            
                        >
                            7
                        </button>

                        <div className="tether-center">
                            TETHER
                        </div>

                        

                        {/* 6 - SW */}
                        <button
                            className={tether?.number === 6 ? "selected" : ""}
                            onClick={() => selectTether(6)}
                            style={{fontSize: '2rem', color: tether?.number === 3 ? 'yellow' : tether?.number === 7 ?  'red' : 'white'}}
                        >
                            6
                        </button>

                        {/* 5 - S */}
                        <button
                            className={tether?.number === 5 ? "selected" : ""}
                            onClick={() => selectTether(5)}
                            style={{fontSize: '2rem', color: tether?.number === 3 ? 'yellow' : tether?.number === 7 ?  'red' : 'white'}}
                        >
                            5
                        </button>

                        {/* 4 - SE */}
                        <button
                            className={tether?.number === 4 ? "selected" : ""}
                            onClick={() => selectTether(4)}
                            style={{fontSize: '2rem', color: tether?.number === 2 ? 'yellow' : tether?.number === 6 ?  'red' : 'white'}}
                        >
                            4
                        </button>

                        {/* 3 - E */}
                        <button
                            className={tether?.number === 3 ? "selected" : ""}
                            onClick={() => selectTether(3)}
                            style={{fontSize: '2rem', color: tether?.number === 2 ? 'yellow' : tether?.number === 6 ?  'red' : 'white'}}
                        >
                            3
                        </button>
                    </div>
                </div>

                {/* SAFE */}
                <div className="section">
                    <div className="section-title">
                        SAFE
                    </div>

                    <div className="button-grid two">
                        <button
                            className={
                                safe === "front / back safe"
                                    ? "selected"
                                    : ""
                            }
                            onClick={() =>
                                setSafe("front / back safe")
                            }
                        >
                            <span style={{fontSize: '1.5rem'}}>↕</span> FRONT / BACK
                        </button>

                        <button
                            className={
                                safe === "side safe"
                                    ? "selected"
                                    : ""
                            }
                            onClick={() => setSafe("side safe")}
                        >
                            <span style={{fontSize: '1.5rem'}}>↔</span> SIDE
                        </button>
                    </div>
                </div>

                {/* STACK / DEFAM FIRST */}
                <div className="section">
                    <div className="section-title">
                        FIRST
                    </div>

                    <div className="button-grid two">
                        <button
                            className={
                                effectOrder === "stack"
                                    ? "selected"
                                    : ""
                            }
                            onClick={() => setEffectOrder("stack")}
                            style={{color: 'yellow'}}
                        >
                            STACK
                        </button>

                        <button
                            className={
                                effectOrder === "defam"
                                    ? "selected"
                                    : ""
                            }
                            onClick={() => setEffectOrder("defam")}
                            style={{color: 'red'}}
                        >
                            DEFAM <span className="number-badge" style={{height: '12px', width: '12px'}}/>
                        </button>
                    </div>
                </div>


                

                {/* TOWER */}
                <div className="section">
                    <div className="section-title">
                        TOWER
                    </div>

                    <div className="button-grid two">
                        <button
                            className={tower === "switch" ? "selected" : ""}
                            onClick={() => setTower("switch")}
                            style={{color: 'green'}}
                        >
                            SWITCH ⇄
                        </button>

                        <button
                            className={tower === "stay" ? "selected" : ""}
                            onClick={() => setTower("stay")}
                            style={{color: 'red'}}
                        >
                            STAY ◆
                        </button>
                    </div>
                </div>

                

                

                {/* RESET */}
                <button
                    className="reset"
                    onClick={reset}
                >
                    RESET
                </button>
            </div>

            <Styles />
        </div>
    );
}