import '../css/NewsList.css'

function NewsList() {
    return (
        <div class='discusBox'>
            <img src='http://placekitten.com/120/120' />

            <div class='discusTitle'>
                <h3>[test] Title of the Discussion</h3>
            </div>

            <div class='discusBrief'>
                <p>
                    Here we are talking about something. and this is the short
                    brief about it.
                </p>
            </div>

            <div class='discusMeta'>
                <div class='discusMetaPostedOn'>
                    <span>Posted on</span>
                    <span class='discusMetaPostedOnDate'>4/4/1984</span>
                </div>

                <div class='discusBy'>
                    <span>by</span>
                    <span>Firstname Surname</span>
                </div>

                <div class='discusLink'>
                    <a href='#'>View &rarr;</a>
                </div>
            </div>
        </div>
    )
}

export default NewsList
