import React from "react"

const Letters = function() {
    
    return (
        <div className="Letters">
            <table className="table">
                <thead>
                    <tr>
                        <th>Letter/Combination</th>
                        <th>Description of the Sound</th>
                        <th>Similar or Identical Sound in English</th>
                        <th>Sample Czech Word</th>
                        <th>English Translation of Sample Word</th>
                    </tr>
                    <tr><td>A</td><td>short, open</td><td>run</td><td>mapa</td><td>map</td></tr>
                    <tr><td>Á</td><td>same as above, but longer</td><td>fall</td><td>sám</td><td>alone</td></tr>
                    <tr><td>B</td><td>same as in English</td><td>bake</td><td>bota</td><td>shoe</td></tr>
                    <tr><td>b (at the end of a word, or before an unvoiced consonant)</td><td>like a soft “p”</td><td>shop</td><td>dub</td><td>oak</td></tr>
                    <tr><td>C</td><td>ts</td><td>Betsy</td><td>kocour</td><td>tomcat</td></tr>
                    <tr><td>Č</td><td>ch</td><td>chair</td><td>čáp</td><td>stork</td></tr>
                    <tr><td>D</td><td>same as in English</td><td>door</td><td>dům</td><td>house</td></tr>
                    <tr><td>d (at the end of a word, or before an unvoiced consonant)</td><td>like a soft “t”</td><td>cat</td><td>had</td><td>snake</td></tr>
                    <tr><td>Ď</td><td>dy</td><td>did you</td><td>dělo</td><td>cannon</td></tr>
                    <tr><td>ď (at the end of a word, or before an unvoiced consonant)</td><td>ty</td><td>not yet</td><td>loď</td><td>boat, ship</td></tr>
                    <tr><td>e</td><td>short “e”</td><td>bed</td><td>nebe</td><td>sky, heaven</td></tr>

                </thead>
            </table>
        </div>
    )
}

export default Letters