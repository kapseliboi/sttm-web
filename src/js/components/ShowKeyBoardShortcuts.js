import React from 'react';
import PropTypes from 'prop-types';


export default class ShowKeyBoardShortcuts extends React.PureComponent {

    return(
        <React.Fragment>
    )
}


const Main = () => {
    const [showKeyBoardShortcuts, setShowKeyBoardShortcuts] = useState(false)

    return (
        <div>
            <button onClick={() => setShowKeyBoardShortcuts(true)}>x</button>

            {
                showKeyBoardShortcuts &&
                <Modal onClose={() => setShowKeyBoardShortcuts(false)}>
                    {
                        closeModal =>
                            <div>
                                <input />
                                <button onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                    }
                </Modal>
            }
        </div>
    )
}

const Modal = props => {
    const [container, setContainer] = useState();

    useEffect(() => {
        const container = document.createElement("div");
        setContainer(container);
        document.appendChild(container);
    }, []);

    return (
        React.createPortal(
            <div style={{ position: "fixed", height: "100%", width: "100%", zIndex: 1000 }}
                onClick={props.onClose}>
                <div onClick={e => e.stopPropogation()}>
                    {props.children(props.onClose)}
                </div>
            </div>,
            container,
        )
    )
}



