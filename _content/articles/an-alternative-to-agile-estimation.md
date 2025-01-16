---
title: When Will It Be Done? A Measured Answer
status = published
---

# When will it be done? A Measured Answer

Traditional Agile planning can take a lot of effort, a lot of
practice, a lot of meetings, and a lot of time. If you find that you
aren't geting the benefits you were hoping for from these Agile
methods you aren't alone, and it might be worth trying something else.

Sometimes the juice isn't worth the squeeze.

I'll offer an alternative based on my decade of software product
leadership experience, but first I want clarify what problem or
situation I'm addressing. Often, business leadership needs to know
when software development will be done, in users hands, so they can
coordinate other parts of the business. The timing of sales efforts,
training programs, advertising campaigns, etc. depend on the
completion and delivery of software features. Planning and executing
these programs in sync with software delivery is a massive value to a
business.

So the leadership asks, "When will it be ready? So I can know when the
advertising needs to be ready, and when the sales team needs to be
hired" What can a software development team answer?

Look, I don't have to tell you that software deveopment timelines are
just really hard to estimate. So one thing we can do is guess. We know
its hard, we know we'll get it wrong a fair amount of the time but we
also know that leadership will have to adjust. So we offer our guesses
with lots of cavieats. Another thing that happens is that teams learn
to estimate really well, and is in a situation where that's feasible.
If you're on one of those teams you don't need an alternative. But I
know that a lot of teams out there are geting the feeling that the
agile estimation rituals they are doing aren't answering the question
much better than a guess.

Here's an alternative. Measured prediction.

Measure your delivery rate and predict completion times based on those
measurements.

## Measuring delivery rate

Presumebly you've got some system of defining the work that needs to
be done; a backlog, a roadmap, something, and you've got some means of
defining what it means for this work to be done. And presumebly as
part of defining this work you break it down into managable
pieces. Maybe they're stories, maybe they're tasks, maybe it's less
formal than that. However it's done, start measuring two metrics for
each of those units of work. Measure Lead Time and Cycle Time.

Lead Time is how long it takes for our prioritization decisions to be
reflected in live software. It's the time from when the work was
defined to when the work was finished. For example the time from when
a story was put on a backlog to when the feature is live in
production.

Cycle Time is the amount of time it takes our development processes to
complete the work. It's the time from when a developer starts working
on a story to when that feature is live in production.

## Answering the question

--- rewrite this to suggest using something like the Jira cycle time
    report https://support.atlassian.com/jira-software-cloud/docs/view-and-understand-your-cycle-time-report/
    https://www.youtube.com/watch?v=UqHQR0U-26o

I like to report this data as a 30, 90, and 365 day rolling 50th and
90th percentile. Taking the 30 day rolling 50th percentile Cycle Time
report as an example. I gather all the work that was completed in the
last 30 days then find the one that took longer than 50% of them
all. I mark this every day on a graph with the date on the X axis and
the Cycle Time on the Y axis.

When someone asks "When will it be ready?" I can look at these reports
and have a reasonable answer.

"Let's see there are 5 stories on the backlog. We have a 50th
percentile lead time of 3 days for a story but our lead time in the
90th percentile is 10 days. It's certainly possible that we'll deliver
it in 15 days, but if we want to be really safe we could plan for 50
days."

That analysis isn't all that mathematically sound and we could be a
lot more rigorous but I've found that even this naive view of the data
often works better than traditional agile estimation and takes less
time from fewer people.

## Other benefits

It helps identify issues, especially if you also report on
variability. For example, you may find that you have long lead times,
but fairly stable and short cycle times. This is showing that the team
is good at defining managable peices of work and good at executing
reliably, but there may be other issues in the planning or
prioritization processes. In this particular scenario I've almost
always found that there is a communication issue between the
development team and whoever is defining and prioritizing the work
(usually a product or project manager). Issues that could cause this
scenario include poorly defined stories leading to lots of back and
forth between the developers and the PM for some stories. Another
common cause for this is backlog churn where defines work get
deprioritized because some more urgent work is discovered.

Long cycle times, especially if they are also highly variable, could
be the result of mounting technical debt, or communication issues
between the development team and QA. If the work isn't well defined
but developers jump right in there can be a lot of time spent at the
end clarifying what work needed to be done or a lot of time
negotiating with QA and fixing things they find that the developer
wasn't aware of.

If you see that there are clumps or clusters of lead or cycle times
you can investigate to see what sort of work each cluster is, and
further refine your planning and reporting processes specifically for
your team.

