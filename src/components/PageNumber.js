function PageNumber(props) {
    return (
        <div className="pageNumber" id={props.id}>
            {props.children}
        </div>
    );
}

export default PageNumber;