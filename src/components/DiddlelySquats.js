function DiddlelySquats( props ) {
    const thedate = props.date.toLocaleDateString();
    return (
      <div>
        <p> Regarding that day (i.e. {thedate}), I did nuffin'... </p>
      </div>
    );
}

export default DiddlelySquats;