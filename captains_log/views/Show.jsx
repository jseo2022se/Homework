const React = require('react')
const DefaultLayout = require('../views/layouts/DefaultLayouts')

// class component
class Show extends React.Component {

    render() {

        const { title, entry, shipIsBroken } = this.props.log

        return (
            <DefaultLayout title={`${title} details`} group='logs'>
            
                <h1>Log Details</h1>
                <p>
                    Log Title: { title }
                </p>
                <p>
                    Entry: { entry }
                </p>
                <p>
                    {shipIsBroken ? "The ship is broken": "The ship is not broken"}
                </p>

                <nav>
                    <a href='/logs'>Back</a>
                </nav>
           
            </DefaultLayout>
        )
    }
}

module.exports = Show