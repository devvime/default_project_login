const aside = () => {
    return (
        /*html*/
        `
        <aside>
            <div class="aside-top">
                <img src="/images/icons/menu_light.svg" />
            </div>
            <div class="menu">
                <ul>
                    <li id="btn_dashboard">Dashboard <img src="/images/icons/dashboard_light.svg" /></li>
                    <li id="btn_logout">Exit <img src="/images/icons/exit_light.svg" /></li>
                </ul>
            </div>
        </aside>
        `
    )
}

export default aside