function Main({children,name,city,position}) {
    return (
        <div>
            this is Main Component
            <h5>{children}</h5>
            {name} - {city} - {position}
        </div>
    );
}

export default Main;