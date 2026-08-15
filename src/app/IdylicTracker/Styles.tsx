export default function Styles() {
return (
    <style>{`
                * {
                    box-sizing: border-box;
                }

                .idylic-tracker {
                    width: 100%;
                    height: 100%;
                    min-height: 100%;

                    display: flex;
                    flex-direction: column;

                    background: #101217;
                    color: white;

                    font-family:
                        system-ui,
                        -apple-system,
                        BlinkMacSystemFont,
                        "Segoe UI",
                        sans-serif;

                    overflow: hidden;
                }

                .reminders {
                    flex-shrink: 0;
                    padding: 10px;

                    display: flex;
                    flex-direction: column;
                    gap: 6px;

                    background: #181b21;
                    border-bottom: 2px solid #30343c;
                }

                .reminder {
                    min-height: 48px;

                    display: flex;
                    align-items: stretch;

                    background: #242832;
                    border-radius: 8px;
                    overflow: hidden;
                }

                .reminder-number {
                    width: 48px;
                    flex-shrink: 0;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background: #343a46;

                    color: #aeb5c2;

                    font-size: 22px;
                    font-weight: 900;
                }

                .reminder-content {
                    flex: 1;

                    display: flex;
                    align-items: center;
                    gap: 14px;

                    padding: 0 14px;

                    font-size: 20px;
                    font-weight: 800;
                }

                .secondary-text {
                    color: #aeb5c2;
                    font-size: 15px;
                    font-weight: 700;
                }

                .empty {
                    color: #626a78;
                }

                .controls {
                    flex: 1;
                    min-height: 0;

                    padding: 10px;

                    display: flex;
                    flex-direction: column;
                    gap: 9px;

                    overflow-y: auto;
                }

                .section {
                    flex-shrink: 0;
                }

                .section-title {
                    margin-bottom: 4px;

                    color: #8e97a7;

                    font-size: 12px;
                    font-weight: 900;
                    letter-spacing: 1px;
                }

                .tether-box {
                    display: grid;

                    grid-template-columns:
                        repeat(3, 1fr);

                    grid-template-rows:
                        repeat(3, 1fr);

                    gap: 6px;
                   
                    
                }

                .number-badge {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: .5rem;

                    width: 30px;
                    height: 30px;

                    background: red;
                    color: white;

                    border-radius: 50%;
                    font-size: 1.3rem;
                    font-weight: bold;
                }

                .tether-box button {
                    min-height: 55px;
                }

                .tether-box button:nth-child(1) {
                    grid-column: 1;
                    grid-row: 1;
                }

                .tether-box button:nth-child(2) {
                    grid-column: 2;
                    grid-row: 1;
                }

                .tether-box button:nth-child(3) {
                    grid-column: 3;
                    grid-row: 1;
                }

                .tether-box button:nth-child(4) {
                    grid-column: 1;
                    grid-row: 2;
                }

                .tether-center {
                    grid-column: 2;
                    grid-row: 2;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 8px;

                    background: #1c2027;
                    color: #697180;

                    font-size: 11px;
                    font-weight: 900;
                    letter-spacing: 1px;
                }

                .tether-box button:nth-child(5) {
                    grid-column: 3;
                    grid-row: 2;
                }

                .tether-box button:nth-child(6) {
                    grid-column: 1;
                    grid-row: 3;
                }

                .tether-box button:nth-child(7) {
                    grid-column: 2;
                    grid-row: 3;
                }

                .tether-box button:nth-child(8) {
                    grid-column: 3;
                    grid-row: 3;
                }

                .button-grid {
                    display: grid;
                    grid-template-columns:
                        repeat(4, 1fr);
                    gap: 6px;
                }

                .button-grid.two {
                    grid-template-columns:
                        repeat(2, 1fr);
                }

                button {
                    min-height: 52px;

                    border: 0;
                    border-radius: 8px;

                    background: #363c48;
                    color: white;

                    font-size: 15px;
                    font-weight: 900;

                    cursor: pointer;
                    user-select: none;

                    -webkit-tap-highlight-color: transparent;
                }

                button:hover {
                    background: #454c59;
                }

                button:active {
                    transform: scale(0.96);
                }

                button.selected {
                    background: #2878c8;

                    box-shadow:
                        inset 0 0 0 2px #70b9ff;
                }

                .reset {
                    margin-top: auto;

                    min-height: 48px;

                    background: #512d34;
                    color: #ffb8c0;
                }

                .reset:hover {
                    background: #673740;
                }

                @media (max-width: 600px) {
                    .reminder {
                        min-height: 42px;
                    }

                    .reminder-content {
                        font-size: 17px;
                    }

                    .secondary-text {
                        font-size: 13px;
                    }

                    button {
                        min-height: 56px;
                    }
                }
            `}</style>
)
}