# Project Overview

## Project Links

- [https://github.com/Dychotomy/Project-2-React/tree/master/react-project] (Github Repo)
- [https://boring-haibt-0c40b1.netlify.app/home] (Wall Covers)

## Project Description

A wallpaper maker app. The app will be able to pull album cover artwork from a music api and tile them into a mosaic. Once the wallpaper is made the user will be able to download a jpeg of the image.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

AudioDB api

[https://codesandbox.io/s/project-2-music-api-test-3fihq?file=/src/App.js:228-297] (Sandbox test code)
```
{"artists": [
	{
		"idArtist": "113085",
		"strArtist": "Lit",
		"strArtistStripped": null,
		"strArtistAlternate": "",
		"strLabel": null,
		"idLabel": null,
		"intFormedYear": "1989",
		"intBornYear": null,
		"intDiedYear": null,
		"strDisbanded": null,
		"strStyle": "Rock/Pop",
		"strGenre": "Punk Rock",
		"strMood": null,
		"strWebsite": "www.litband.com",
		"strFacebook": "www.facebook.com/LitLounge",
		"strTwitter": "twitter.com/litbandofficial",
		"strBiographyEN": "Lit is an alternative rock band, based in Fullerton, California. They released several singles in the late 1990s and early 2000s including their No. 1 hit \"My Own Worst Enemy\", \"Miserable\", \"Zip-Lock\", \"Over My Head\", \"Lipstick and Bruises\", \"Addicted\", \"Looks Like They Were Right\", and \"Times Like This\".\n\nPre-Lit (1989–1996)\nThe band was formed in 1989 under the name Razzle. The group released a demo tape in 1990 and an EP entitled New Vibe Revolution in 1993. Razzle dissolved in 1993 and became Stain in 1994, which had a much harder and heavier sound. They released a demo tape in 1995 and eventually signed with Malicious Vinyl in 1995. Due to another band owning the name, they changed their name to Lit in 1996.\n\nTripping the Light Fantastic (1997–1998)\nOn April 1, 1997 the group released Tripping the Light Fantastic on the Malicious Vinyl record label. Malicious Vinyl went out of business shortly after Tripping the Light Fantastic was released, which left the band unsigned once again. They spent their time writing a new batch of songs and showcasing for various record labels until they signed with RCA Records in 1998.\n\nThe RCA years (1998–2002)\nThe group shot to stardom with the platinum album, A Place in the Sun, released in 1999. A Place in the Sun yielded the hit single, \"My Own Worst Enemy,\" which held the number one position on the Billboard Hot Modern Rock Tracks chart for a total of 12 weeks, and received a Billboard Music Award for the biggest modern rock song of 1999. It was followed by \"Zip-Lock\" (which featured Blink-182 in the video) and \"Miserable\", the latter of which was among the top ten most played songs of 2000 and featured Pamela Anderson in the video. The band performed over 286 shows and toured worldwide in support of A Place in the Sun. In addition to the Vans Warped Tour and a slot on Woodstock 1999, the band toured with The Offspring, Garbage, and No Doubt.\nLit followed up A Place in the Sun with the 2001 release of Atomic which gave the band another Top 10 hit with \"Lipstick And Bruises\". Lit toured to support Atomic with Kid Rock and Butch Walker. The group was released from their contract with RCA Records in late 2002.\n\nLit and death of Allen Shellenberger (2003–2009)\nLit went on a small, intimate club tour in the fall of 2003 before releasing the self-titled Lit on the DRT Entertainment label on June 24, 2004. The single \"Looks Like They Were Right\" made it on the Top 40 charts. That year the group also put out its first long-form DVD, All Access, on November 16, 2004.\nOn May 5, 2008 it was announced that Lit's drummer, Allen Shellenberger, was diagnosed with a malignant glioma (brain tumor). On July 26, 2008, Lit held a benefit for Allen at House Of Blues in Anaheim, California. A number of bands performed including Sugar Ray and Handsome Devil. No Doubt drummer Adrian Young filled in for Shellenberger on the drums for a few songs. Both drummers also played at the same time for a few songs. Shellenberger died on August 13, 2009, at the age of 39.\n\nNew drummer and The View from the Bottom (2009–present)\nOn November 27, 2009, Lit officially announced that Nathan Walker would be the new drummer for Lit and that writing had begun on a new album.\nIn April 2010 during an interview with OC Talk Radio, Lit hinted they are currently talking with and would return to a major label for their next release. They also revealed they are working on a new management deal as well as performing new material live.\nIn September 2010, Kevin Baldes confirmed that Lit were currently in the studio, writing and recording their sixth studio album. The band is working with producer Marti Frederiksen (Aerosmith, Def Leppard, Mötley Crüe, Foreigner, Sheryl Crow, Faith Hill).\nThe band reported they were still in the studio their new album in July 2011, and released a demo video titled \"You Tonight\". Lit announced in December 2011 that they were back in the studio with producer Butch Walker to finish their new CD. It was also announced that the band had signed with Megaforce Records and would release their new album The View from the Bottom on June 19, 2012.\nThe first single, \"You Tonight,\" was released on iTunes on May 1, 2012.\nA video for \"The Broken\" was released online on August 16, 2012.\nOn January 7, 2013, frontman A. Jay Popoff told Loudwire that after Lit finishes touring in support of The View from the Bottom, they will begin writing their next album.",
		"strBiographyDE": null,
		"strBiographyFR": null,
		"strBiographyCN": null,
		"strBiographyIT": null,
		"strBiographyJP": null,
		"strBiographyRU": null,
		"strBiographyES": null,
		"strBiographyPT": null,
		"strBiographySE": null,
		"strBiographyNL": null,
		"strBiographyHU": null,
		"strBiographyNO": null,
		"strBiographyIL": null,
		"strBiographyPL": null,
		"strGender": "Male",
		"intMembers": "4",
		"strCountry": "Fullerton",
		"strCountryCode": "US",
		"strArtistThumb": "https://www.theaudiodb.com/images/media/artist/thumb/rqwyvu1382893981.jpg",
		"strArtistLogo": "https://www.theaudiodb.com/images/media/artist/logo/lit-500093cf8589c.png",
		"strArtistClearart": null,
		"strArtistWideThumb": "https://www.theaudiodb.com/images/media/artist/widethumb/rwprvp1531492152.jpg",
		"strArtistFanart": "https://www.theaudiodb.com/images/media/artist/fanart/vssurs1382894499.jpg",
		"strArtistFanart2": "",
		"strArtistFanart3": "",
		"strArtistBanner": null,
		"strMusicBrainzID": "5ccb9a53-092d-4806-b337-470a582893d7",
		"strLastFMChart": null,
		"intCharted": "3",
		"strLocked": "unlocked"
	}
]
}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [https://res.cloudinary.com/dpn6ltns1/image/upload/v1593180165/React%20Project/mobile_wireframe.jpg] (Mobile)
- [https://res.cloudinary.com/dpn6ltns1/image/upload/v1593180172/React%20Project/desktop_wireframe.jpg] (Desktop)
- [https://res.cloudinary.com/dpn6ltns1/image/upload/v1593180178/React%20Project/react%20wireframe.jpg] (Architecture)
[https://res.cloudinary.com/dpn6ltns1/image/upload/v1593188492/React%20Project/react-architecture2_u5ky1x.jpg] (Architecture Revised)

*Note - There are some significant changes from the original design, the wireframes do not accurately reflect the live app.


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| React App Architecture | H | 2hrs | -- | 2hr |
| Learn about React-animations | M | 2hrs | -- | 1hr |
| Image Compiler | H | 6hrs | -- | 4.5hrs |
| Grid Component | H | 6hrs | -- | 7hrs |
| Adding Search Bar | H | 3hrs| -- | 1.5hrs |
| Working with API | H | 3hrs| -- | 2.5hrs |
| CSS & Styling | M | 4hrs | -- | 4hrs |
| Dom to Image | H | 4hrs | -- | 3hrs |
| Total | H | 30hrs| -- | 25.5hrs |

#### PostMVP 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Editable Wallpaper | M | 6hrs | -- | -- |
| Animated Wallpapers | M | 6hrs | -- | -- |
| Implement SCSS | M | 2hrs | -- | -- |
| Playlist suggestions | L | 2hrs | -- | -- |
| Embedded YouTube | L | 4hrs | -- | -- |
| Learn about Firebase | L | 4hrs | -- | -- |
| Total | H | 20hrs| -- | -- |


## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull | 
| Header | This will render the header includes the nav | 
| Artist Info | The artist search results |
| Search bar | Input form used to search the api also homepage |
| Image Compiler | displays results and adds the selected album art to the Grid |
| Grid Component | A component that generates a grided scaffold for album art |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

 React Bootstrap
 FontAwesome
 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

This is part of a set of code that I use to collage the album covers into a mosaic.

```
            if (i % 3 === 0) {
                return (
                    <div className={`grid-item span-3 grid-item-${i}`}>
                        <img src={`${album}`} 
                            alt={`Album Cover Art ${i}`} 
                        />
                    </div>
                )
            }
```