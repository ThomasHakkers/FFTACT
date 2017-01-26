# FFTACT
Simple POC for Fuzzy Fault Tree Analysis over the Continuous Time, which was part for our ([Thomas Hakkers](https://github.com/ThomasHakkers/) and [Harmjan Kors](https://github.com/hkors)) research assignment.
The application uses [Plot.ly](plot.ly) to display all graphs.

![Basic Event](/images/BasicEventExample.png)

# Installation

1. Make sure you have [Node.js](https://nodejs.org) installed.
2. Clone repository
3. Open console in folder with repository
4. Type `npm install` to install packages
5. Edit the `config.js` file to supply your [Plot.ly](plot.ly) info
6. Type `npm start` to start

# Creating your own graphs
Currently, you'll have to edit some things in the code itself.
A Fault Tree is build out of nodes. Each node is a separate object.

## Basic Events
A [basic event](/models/basic-event.js) node can be created by calling `new BasicEvent(lambda, sigma)`. `lambda` determines the rate parameter of an [exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution), while the `sigma` determines the uncertainty factor/variance (see [Normal distributions](https://en.wikipedia.org/wiki/Normal_distribution)) of a [basic event](/models/basic-event.js).  

## Logic gates
Logic gates can be created by for example calling `new Or(children)` (for an [Or](/models/gates/or.js)-gate). The children that can be supplied can be any type of node. So [basic event](/models/basic-event.js) as well as [other gates](/models/gates/) are allowed. 

## Performing calculations
Right now there are two examples available which can be called by uncommenting the functions at the bottom of the [index.js](index.js) file. `test3DGraph()` generates a 3D graph using the rootnode defined before is and `testCrossSection()` merely calculates a cross section at time t = 2 to show off how the and and or gates functions.

Note that calling `test3DGraph()` takes a fairly long time right now. In the future a function that approximates this graph might get implemented to reduce the long executing time.

# Documentation
See paper created on this topic over [here](FFTACT-Thomas-Hakkers&Harmjan-Kors.pdf) in the repository.
