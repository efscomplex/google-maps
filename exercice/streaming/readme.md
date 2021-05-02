# Streaming in the Net

## The RegisterdUser class

As we can see, the RegisteredUser class is checking all type of services in order to get the actual price of every one. This implementation is no very practical if in the future we want to add some extra services, forcing us to add type checkings for these services.

By the other hand, a registered user is computing the total price for the services is consuming... It shouldn't be her responsability!!

To solve this, we are going to apply some SOLID principles, clean code and good practices...

## Refactoring the Business Logic

The Registered user don't need to know about the many implementations of every kind of service, only a way to get the total price.

We can fix this behaivour by refactoring the multimedia content. We are going to extract the logic for the total price from the RegisteredUser class to a Payment class that implements the differents services the user is registered for.
Hence, following the SRP and the open close principles, we will isolate some logic (user shouldn't know multimedia, payment shouldn't know multimedia, total price computation outside the user concerns).

Only the services consumes the multimedia content in order to get the proper price, based on the kind of multimedia content (premium or not)
