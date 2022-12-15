import styles from './InstructionApp.module.css';

const InstructionApp = (props) => {
    const { image, description } = props;
    return (
        <div className={styles.instructionApp}>
            <p>{description}</p>
            <img src={image} alt="image" />
        </div>
    );
};

export default InstructionApp;
