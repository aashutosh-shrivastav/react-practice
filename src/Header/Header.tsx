function Header(){
    const labels = {
        appName:"Recipe Book",
        links:[
            {
                id:0,
                title:"Home"
            },
            {
                id:1,
                title:"Schedule"
            },
            {
                id:2,
                title:"Recipies"
            }
        ]
    }
return (
    <div className="primary header d-flex ai-center pd-lr-10">
        <span className="headline-large on-primary-text pd-1em">{labels.appName}</span>
        <span className="spacer"></span>
        {labels.links.map(link=>(<span className="headline-small on-primary-text pd-1em" id = {link.id.toString()}>{link.title}</span>))}
    </div>
);
}

export default Header;