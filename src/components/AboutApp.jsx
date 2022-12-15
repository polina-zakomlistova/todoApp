//components
import InstructionApp from './Containers/InstructionApp';
//data
import descriptions from '../Data/descriptionApp';
import todos from '../Data/todos';

const AboutApp = () => {
    return (
        <div>
            {descriptions.map((item, index) => {
                return (
                    <InstructionApp
                        key={index}
                        image={item.image}
                        description={item.description}
                    />
                );
            })}
        </div>
    );
};

export default AboutApp;
