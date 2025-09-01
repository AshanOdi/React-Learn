function Main({children,name,city,position}) {
    return (
        <div>
            this is Main Component
            <h1>{children}</h1>
            {name} - {city} - {position}
        </div>
    );
}

export default Main;