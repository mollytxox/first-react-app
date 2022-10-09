import { useState } from 'react';

const ModalWindow = () => {
    return (
        <div id="modal">
            <h2>Modal</h2>
        </div>
    )
}

const Modals = () => {
    const [modalIsOpen, triggerModal] = useState(false);

    const toggleModal = () => {
        // ! before a boolen value will flip the value like below
        triggerModal(!modalIsOpen);
    }

    return (
        <div className="modals-box">
            <h2>React Modals</h2>
            <p>This modal uses useState to render
                on the screen.
            </p>
            <button onClick={toggleModal}>Open Modal</button>
            {modalIsOpen && <ModalWindow />}
        </div>
    )
}

export default Modals;