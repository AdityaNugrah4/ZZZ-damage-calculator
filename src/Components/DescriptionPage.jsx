import React from 'react'

const DescriptionPage = () => {
    return (
        <div className='description-page'>
            <h1>Note!</h1>
            <p>Hello! first, this calculator still in beta and currently only show agent raw damage (no bonus damage from external source and from disc set bonus).</p>
            <p>Second, the calculated damage is only estimates with some deviation and is based of on enemy level (which currently still not functioning properly).</p>
            <p>If you have any feedback please let me know by notifying me through <a href="https://discord.com/users/3nerj3n" target='_blank' rel='noopener'>Discord</a> or <a href="https://github.com/AdityaNugrah4" target='_blank' rel='noopener'>GitHub</a>.</p>
            <p>Sorry if your experiences using this calculator still lacking. Cheers!</p>
            <p>Notable Error:</p>
            <ul>
                <li>Nicole dmg multiplier is more complex than other, hence the page show "Still in development", still working on it.</li>
                <li>Some agent has unique scalling, hence the page show "Still in development".</li>
                <li>You can pick enemy but the calculation on damage based on enemy defense and level still not working properly.</li>
            </ul>

        </div>
    )
}

export default DescriptionPage