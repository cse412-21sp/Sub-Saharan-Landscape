# CSE412 Final Project Template (Idyll)

## Team Members

* Subhangi Kabra
* Lukas Naehrig
* Rishabh Verma
* Joia Zhang

### Contribution Statements

Add individual contribution statements here.

## Project Proposal Abstract

Widespread misconceptions persist about the social, economic, and technological development in Sub-Saharan Africa. Our goal is to dispel these misconceptions by exploring and analyzing trends around the continent to reflect the diversity of Sub-Saharan Africa. While it is clear that the Sub-Saharan African region has witnessed incredible amounts of changes in its social, economical and environmental landscape, these changes are nuanced and thus we will analyze these factors in Sub-Saharan Africa to find trends and correlations within this region.

The visualization techniques that we will apply in our explorational study are time series analysis charts, scatter plots, maps, and bar/distribution graphs, interactivity, and animation where useful. We aim to map out the gender-gap, poverty, education rates, employment rates, technological innovation, growth of the countries and several other demographic variables, and through these visualizations, we aim to debunk outdated myths and present a more accurate reflection of developments in Sub-Saharan Africa.
## Getting Started

This template is a starting place for your project. Update the header information to include the relevant details for your project, and then feel free to mix and match the visualization and layout techniques introduced here for your own narrative.

Think about how the narrative structure draws readers into the story you are telling and how the visualizations interact with the text (and with each other). The narrative should help ensure that the page as a whole is greater than just the sum of it's parts. When designing your page, decide on particular layouts that enhance the reader's experience and understanding of the topic.

### Required Software

You must have Node.js installed. You can get it directly from https://nodejs.org/en/.

### Installation

- Clone and open your project repo on your own computer.
- Make sure you have `idyll` installed (`npm i -g idyll`).
- Run `npm install` to install project-specific dependencies.

npm is the node package manager. If you're curious how this works and what the project dependencies are, open up `package.json` to see where these are listed.

You can install custom dependencies by running `npm install <package-name> --save`. Note that any collaborators will also need to download the package locally by running `npm install` after pulling the changes.

### Developing a post locally

Run `idyll` from the command line. Your post will appear at [http://localhost:3000/](http://localhost:3000/). When the server is running, any local change that you make will be deteched and your webpage will auto-update with the new changes. Your local changes will not be visible to your team members until you push the changes to your repository. These changes will not be reflected in the final website unless you run the build script and push the updated docs folder (see below).

### Building a post for production

Run `idyll build`. The output will appear in the top-level `build` folder. To change the output location, change the `output` option in `package.json`.

### Deploying

Make sure your post has been built, then commit the `docs` folder to your project repository. It will be available at [cse412-21sp.github.io/your-repo-name/](). For example, you can view the sample embedded Tableau, vega-lite, and d3 charts at [https://cse412-21sp.github.io/Final-Project-Template](https://cse412-21sp.github.io/Final-Project-Template).

#### Acknowledgements

This template was adapted from the initial Scrollytelling template for Idyll. The code and visualization examples were adapted from the [final project template](https://github.com/cse412-21w/project-demo) created for a previous offering of CSE 412.
