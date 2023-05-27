export default function Item(props) {
    const { avatar, name } = props;
    return (
        <div>
            <img
                alt={name}
                src={`/avatar/${avatar}.png`}
            />
        </div>
    );
}
