import React from "react"

const Letters = function() {
    
    return (
        <div className="Letters">
            <table className="table">
                <thead className="table_header">
                    <tr>
                        <th>Letter/Combination</th>
                        <th>Description of the Sound</th>
                        <th>Similar or Identical Sound in English</th>
                        <th>Sample Czech Word</th>
                        <th>English Translation of Sample Word</th>
                    </tr>
                </thead>
                <tbody className="table_body">
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
                    <tr><td>é</td><td>same as above, but longer</td><td>bear</td><td>malé</td><td>small</td></tr>
                    <tr><td>ě</td><td>ye</td><td>yet</td><td>věda</td><td>science</td></tr>
                    <tr><td>f</td><td>same as in English</td><td>fall</td><td>fotka</td><td>photo</td></tr>
                    <tr><td>g</td><td>same as English hard “g”</td><td>go</td><td>garáž</td><td>garage</td></tr>
                    <tr><td>g (at the end of a word, or before an unvoiced consonant)</td><td>like a soft “k”</td><td>rock</td><td>grog</td><td>grog</td></tr>
                    <tr><td>h</td><td>same as in English</td><td>hot</td><td>had</td><td>snake</td></tr>
                    <tr><td>h (at the end of a word, or before an unvoiced consonant) </td><td>like a “k,” but without the hard stop</td><td>like the Scottish “ch” in “loch” or German “ach”</td><td>roh</td><td>corner</td></tr>
                    <tr><td>ch</td><td>same as above</td><td>same as above</td><td>chata</td><td>cabin</td></tr>
                    <tr><td>i</td><td>short “i”</td><td>skin</td><td>pivo</td><td>beer</td></tr>
                    <tr><td>í</td><td>same as above, but longer</td><td>beet</td><td>mít</td><td>to have</td></tr>
                    <tr><td>j</td><td>y</td><td>yes</td><td>jablko</td><td>apple</td></tr>
                    <tr><td>k</td><td>same as in English, but not aspirated</td><td>book</td><td>kolo</td><td>wheel</td></tr>
                    <tr><td>l</td><td>same as in English, but a little crisper</td><td>lift</td><td>liška</td><td>fox</td></tr>
                    <tr><td>m</td><td>same as in English</td><td>man</td><td>matka</td><td>mother</td></tr>
                    <tr><td>n</td><td>same as in English</td><td>man</td><td>noha</td><td>foot, leg</td></tr>
                    <tr><td>ň</td><td>ny</td><td>canyon</td><td>zbraň</td><td>weapon</td></tr>
                    <tr><td>o</td><td>short, rounded</td><td>or</td><td>rok</td><td>year</td></tr>
                    <tr><td>ó</td><td>same as above, but longer</td><td>more</td><td>jód</td><td>iodine</td></tr>
                    <tr><td>p</td><td>same as in English, but not aspirated</td><td>stop</td><td>pata</td><td>heel</td></tr>
                    <tr><td>q</td><td>kv (occurs only in foreign words)</td><td>blank verse</td><td>quasi</td><td>quasi</td></tr>
                    <tr><td>r</td><td>trilled as in Spanish</td><td>three</td><td>rosa</td><td>dew</td></tr>
                    <tr><td>ř</td><td>trilled “r” together with “ž”</td><td>no English equivalent</td><td>řada</td><td>row, line</td></tr>
                    <tr><td>ř (at the end of a word, or before an unvoiced consonant)</td><td>trilled “r” together with “š”</td><td>no English equivalent</td><td>keř</td><td>bush</td></tr>
                    <tr><td>s</td><td>same as in English</td><td>stop</td><td>rosa</td><td>dew</td></tr>
                    <tr><td>š</td><td>sh</td><td>rush</td><td>šaty</td><td>dress, suit</td></tr>
                    <tr><td>t</td><td>same as in English, but not aspirated</td><td>cat</td><td>tele</td><td>calf</td></tr>
                    <tr><td>ť</td><td>ty</td><td>not yet</td><td>síť</td><td>net</td></tr>
                    <tr><td>u</td><td>short, rounded</td><td>put</td><td>ruka</td><td>hand</td></tr>
                    <tr><td>ú</td><td>same as above, but longer; occurs only at the beginning of a word</td><td>spoon</td><td>ústa</td><td>mouth</td></tr>
                    <tr><td>ů</td><td>same as above; occurs only in the middle or at the end of a word</td><td>spoon</td><td>můra</td><td>moth</td></tr>
                    <tr><td>v</td><td>same as in English</td><td>very</td><td>vana</td><td>bathtub</td></tr>
                    <tr><td>v (at the end of a word, or before an unvoiced consonant)</td><td>f</td><td>off</td><td>kov</td><td>metal</td></tr>
                    <tr><td>w</td><td>v (occurs only in foreign words)</td><td>very</td><td>watt</td><td>watt</td></tr>
                    <tr><td>x (occurs mostly in foreign words)</td><td>ks</td><td>axe</td><td>xerografie</td><td>xerography</td></tr>
                    <tr><td>y</td><td>same as “i” above</td><td>skin</td><td>ryba</td><td>fish</td></tr>
                    <tr><td>ý</td><td>same as above, but longer</td><td>beet</td><td>býk</td><td>bull</td></tr>
                    <tr><td>z</td><td>same as in English</td><td>razor</td><td>zlato</td><td>gold</td></tr>
                    <tr><td>z (at the end of a word, or before an unvoiced consonant)</td><td>s</td><td>class</td><td>obraz</td><td>picture</td></tr>
                    <tr><td>ž</td><td>zh</td><td>measure</td><td>žába</td><td>frog</td></tr>
                    <tr><td>ž (at the end of a word, or before an unvoiced consonant)</td><td>sh</td><td>dash</td><td>nůž</td><td>knife</td></tr>
                </tbody>
            </table>
        </div>
    )
}

export default Letters