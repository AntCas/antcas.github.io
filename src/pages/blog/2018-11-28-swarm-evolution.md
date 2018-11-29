---
path: "/blog/2018-11-28-swarm-evolution"
date: "2018-11-28"
title: "Swarm Evolution"
location: "Medellín, Colombia"
color: "#000"
image: "/swarmvolution/swarm-evolution.png"
topics: ["project", "engineering", "evolution", "genetic algorithm", "biology", "neural network", "machine learning"]
---

# Emergent Swarm-Like Behavior

What conditions are necessary for swarm-like behavior to evolve?

To try and find an answer I built a simulation that lets me test conditions in an environment with two types of creature:

Creature A is populous and small. The longer they live, the more chances they get to breed. We’ll call this our prey creature.

Creature B has a small population, they are bigger and faster. The more prey they eat, the stronger they are, and the more chances they get to breed. We’ll call this our predator creature.

![Two types of creatures swarming around each other.](/images/blog/swarmvolution/swarm.gif "Swarming Creatures")

[You can check out the (fun weekend project quality) code on GitHub.](https://github.com/AntCas/swarmvolution)

## Evolution

The creatures have a genetic breeding mechanism. They have genes that control their behavior and senses that allow them to detect whether they are near an ally or an enemy.

Creatures don’t innately know which is which. Not at first. They learn who is who, and how to respond to each, through evolution.

Prey that get eaten quickly don’t breed as much as prey who survive a long time. So genes that help prey stay alive should be passed down more often than genes that get prey eaten. Over time, the whole population of prey should consist of individuals who’s ancestors were good at not getting eaten.

It’s a similar story with the Predators. Predators that don’t eat, don’t get to breed as much as Predators that do. Predators who eat the most prey will dominate the breeding pool. Over time, the whole population of predators should consist of individuals who’s ancestors were good at eating prey.

## Behavior

With these constraints in place, can prey creatures develop cooperative behavior? Would predators learn to pack hunt? Will prey follow each other, or just avoid the predators?

If these factors are not enough, then what other factors must be present before swarming or pack-hunting behavior emerges? How complex must their brains be? What evolutionary pressures need to exist? How does their physiology affect their behavior?

Both predator and prey have the same “brain” structure. Their behavioral difference are only affected by their genetic code. The Predators are a bit bigger and faster, and they can see a bit farther, but there are less than them.

What happens if we change their morphology? e.g. what if prey are big and predators are small? What if we change how far they can see? The directions in which they can see? How well they can see what they’re looking at?

I want to find a the simplest set of criteria that allow these behaviors to emerge.

# What do creatures look like?

![Diagram of organism showing how body size and vision range are defined by concentric circles](/images/blog/swarmvolution/Body.svg "Body Diagram")

Each creature has a circular body.

They can sense creatures near to them in four directions equally spaced around their body.

In each direction they can see how close their nearest ally (like organism) is and how close their nearest opponent (different organism) is.

In each direction of sight they have one neuron for enemy-detection and one neuron for ally-detection.

![Diagram showing evenly spaced vision neurons around circular body of organism](/images/blog/swarmvolution/Senses.svg "Senses Diagram")

So if there is more than one enemy or ally in a certain direction, they can only sense the nearest.

They are both “near-sighted” and “round-sighted”. They can see the closest enemy or ally to them in all directions and they have a sense of how far away that creature is within the limits of their vision.

They can’t see anything if there are no creatures within their visual range. 

Imagine they are fish in the ocean. Beyond a certain point, all they can see is the darkness of the ocean.

# How do creatures move?

![Diagram showing organism can rotate orientation left or right](/images/blog/swarmvolution/Move.svg "Movement Diagram")


Each creature moves at a constant rate of speed. They can not choose to speed up or slow down.

Unless they choose to turn, they will continue to move in a straight line. The direction of travel determined by their orientation.

When they turn, it is at a constant rate of rotation. In other words, no sharp turns, they have a fixed turning radius.

Each of these attributes is something that could be changed. What would happen if we gave creatures control over their turning radius? Their speed?

# How do their brains work?

Their brains are a neural network.

The human brain is made of many interconnected neurons. When a neuron receives an electric charge it may or may not pass a charge on to any of the many neurons it connects to.

A neural net operates in the same way. It’s like a very simple model of a biological neural system.

## Neurons and Perceptrons

In the human brain, the base unit is the neuron:

![Diagram of a human neuron](/images/blog/swarmvolution/neuron.png "Neuron")

In the computer neural network, the base unit is the perceptron:

![Diagram of a software perceptron](/images/blog/swarmvolution/perceptron.png "Perceptron")

Like a neuron, the perceptron has inputs and outputs. Instead of electricity, the perceptron receives a number from each input.

The perceptron has a setting for each input that tells it how much to care about that input. We call these settings “weights”.

If a perceptron weighs an input highly, it cares about that input a lot, and will output a higher number in response.

The perceptron decides that number based on the result of an activation function. The activation function calculates what number to output based on the combined values and weights of the inputs.

## Neural Networks

![Diagram of a neural network](/images/blog/swarmvolution/nn.svg "Neural Network")

We usually organize perceptrons into “layers”. Our organisms have three layers of perceptrons in their brains.

At the top is the input layer, which is made from our sense perceptrons. Since we have four directions our organism can see in, and two perceptrons per direction, our input layer has eight perceptrons in total.

At the bottom is our output layer. Our organism can rotate clockwise or counterclockwise. That’s two options, so the organism gets two output perceptrons.

In the middle of the two, we have a “hidden” layer. This layer exists so that the organism can learn more complex behavior. A neural network can have many layers and each layer can have any number of nodes.

In our case our organism have one hidden layer and that hidden layer has four nodes.

![Diagram of a neural network](/images/blog/swarmvolution/nn-model.svg "Neural Network")

A neural network "learns" by adjusting the weights of all the connections among its perceptrons to get a better answer.

There’s a lot of methods a computer can use to figure out the best set of weights.

We are going to use evolution.

# How do the organisms evolve?

Each organism has DNA which defines its behavior. This “DNA” is actually the set of weights used by the neural network.

When two organisms breed, their offspring randomly inherits one or the other of their parents genes for each weight.

There is also a small chance of that neuron randomly mutating to be a different weight. These random changes simulate the random mutations found in nature. These mutations can cause new behaviors to emerge at random.

If the new gene causes a behavior that helps the organism survive, it should be more likely to pass down that gene.

## How do they organisms choose who to breed with?

Each organism in our model breeds at least once. If they are fitter than the population as a whole, they will get more chances to breed again.

The fitter the organism, the more likely it is to breed many times.

We can think of the gene pool as a roulette wheel where fitter organisms take up a larger wedge of the wheel.

At the end of a round of the simulation, the old generation is replaced with their offspring.

[Learn more about genetic algorithms.](https://www.youtube.com/watch?v=9zfeTw-uFCw)


# What are the results so far?

The untrained organisms were surprisingly intelligent. Even without training they move around in a way that looks natural.

So far I’ve run the simulation up to 100 generations. At times, the organisms follow each other around in a kind of porto-swarm behavior.

I think it will take two to ten times longer to see this porto-swarm behavior develop into something more obviously swarm-like.

The organisms may need better vision, and/or finer control over their turning radius, to develop swarming behavior. 

# Next Steps

Currently, the organisms can’t tell the difference between a creature right in front of them and one 90 degrees away if those creatures are close to the boundaries of their vision.

If they had more sight neurons, or if all their sight neurons were packed on one side of their body, they would be able to make finer adjustments to their motion.

My next experiments with this system will tweak their vision and orientation control in this way. I also want to experiment with much larger populations that live longer and breed over more generations.


