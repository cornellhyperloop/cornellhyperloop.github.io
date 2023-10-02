import React, { Component } from "react";
import "../App.css";
import * as d3 from "d3";
import Modal from "./modal.jsx";
import AboutScrollbar from "./about_scrollbar";

export default class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: "test",
    };
  }

  componentDidMount() {
    fetch("./data/about.json")
      .then((result) => result.json())
      .then((data) => this.setState({ pageData: data }));
    //   {
    //     this.setState({ pageData: data });
    //     console.log(
    //       Object.keys(this.state.pageData.ComputingSystems.DavidWolfers)
    //     );
    //   });
  }

  componentDidUpdate() {
    this.renderVelocityGraph();
  }

  renderVelocityGraph() {
    let height = 500;
    let width = 500;
    let barWidth = 30;
    let colors = [
      "#e41a1c",
      "#377eb8",
      "#4daf4a",
      "#984ea3",
      "#ff7f00",
      "#ffff33",
      "#a65628",
      "#f781bf",
      "#999999",
    ];

    let svg = d3
      .select(".velocityGraph")
      .append("svg")
      .attr("height", height)
      .attr("width", width);
    let margin = { top: 10, right: 10, bottom: 30, left: 50 };
    let chartWidth = width - margin.left - margin.right;
    let chartHeight = height - margin.top - margin.bottom;
    let annotations = svg.append("g").attr("id", "annotations");
    let chartArea = svg
      .append("g")
      .attr("id", "chart-area")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    let sprints = ["Sprint #1", "Sprint #2"];
    let workExtent = [0, 20];

    // Values order: Computing Systems, Power Systems, UI
    let data = [
      {
        sprint: "Sprint #1",
        values: [1, 4, 16],
      },
      {
        sprint: "Sprint #2",
        values: [5, 16, 19],
      },
    ];

    let xScale = d3
      .scaleBand()
      .domain(sprints)
      .range([0, chartWidth])
      .padding(0.05);
    let yScale = d3.scaleLinear().domain(workExtent).range([chartHeight, 0]);

    let xAxis = d3.axisBottom().scale(xScale);
    let xAxisG = annotations
      .append("g")
      .attr("class", "x axis")
      .attr(
        "transform",
        `translate(${margin.left}, ${chartHeight + margin.top + 10})`,
      )
      .call(xAxis);

    let yAxis = d3.axisLeft(yScale);
    // let yGridlines = d3.axisLeft(yScale)
    //                    .tickSize(-chartWidth - 10)
    //                    .tickFormat('')

    annotations
      .append("g")
      .attr("class", "y axis")
      .attr("transform", `translate(${margin.left - 10}, ${margin.top})`)
      .call(yAxis);
    // annotations.append('g')
    //            .attr('class', 'y gridlines')
    //            .attr('transform', `translate(${margin.left - 10}, ${margin.top})`)
    //            .call(yGridlines)

    let rects = chartArea
      .selectAll("rect.bar")
      .data(data)
      .join((enter) => {
        let bandwidth = xScale.bandwidth();
        let barWidth = xScale.bandwidth() / (2 * sprints.length);

        enter
          .append("rect")
          .attr("class", "bar")
          .attr("fill", colors[0])
          .attr("x", (d) => xScale(d.sprint) + bandwidth / 2 - barWidth * 1.5)
          .attr("y", (d) => yScale(d.values[0]))
          .attr("width", barWidth)
          .attr(
            "height",
            (d) => chartHeight + margin.top - 10 - yScale(d.values[0]),
          );

        enter
          .append("rect")
          .attr("class", "bar")
          .attr("fill", colors[1])
          .attr("x", (d) => xScale(d.sprint) + bandwidth / 2 - barWidth * 0.5)
          .attr("y", (d) => yScale(d.values[1]))
          .attr("width", barWidth)
          .attr(
            "height",
            (d) => chartHeight + margin.top - 10 - yScale(d.values[1]),
          );

        enter
          .append("rect")
          .attr("class", "bar")
          .attr("fill", colors[2])
          .attr("x", (d) => xScale(d.sprint) + bandwidth / 2 + barWidth * 0.5)
          .attr("y", (d) => yScale(d.values[2]))
          .attr("width", barWidth)
          .attr(
            "height",
            (d) => chartHeight + margin.top - 10 - yScale(d.values[2]),
          );
      });

    console.log(rects);

    // let xScale = d3.scaleBand().domain(sprints).range([0, width]);
    // svg.append('g')
    //     .attr('transform', 'translate(30,' + height/1.2 + ')')
    //     .call(d3.axisBottom(xScale).tickSize(0));

    // let yScale = d3.scaleLinear().domain([0, 20]).range([height/1.2-10, 0]);
    // svg.append('g')
    //     .attr("transform", "translate(30, 10)")
    //     .call(d3.axisLeft(yScale))

    // // Computing Systems
    // svg.append('rect')
    //     .attr('x', 110)
    //     .attr('y', yScale(1)+10)
    //     .attr('height', height - yScale(1) - 93)
    //     .attr('width', barWidth)
    //     .style('fill', colors[0])

    // // Power Systems
    // svg.append('rect')
    //     .attr('x', 140)
    //     .attr('y', yScale(4)+10)
    //     .attr('height', height - yScale(4) - 93)
    //     .attr('width', barWidth)
    //     .style('fill', colors[1])

    // // UI
    // svg.append('rect')
    //     .attr('x', 170)
    //     .attr('y', yScale(16)+10)
    //     .attr('height', height - yScale(16) - 93)
    //     .attr('width', barWidth)
    //     .style('fill', colors[2])

    // // Legend
    // svg.append('rect')
    //     .attr('x', width - 190)
    //     .attr('y', 10)
    //     .attr('height', 20)
    //     .attr('width', 20)
    //     .style('fill', colors[0])

    // svg.append('rect')
    //     .attr('x', width - 190)
    //     .attr('y', 35)
    //     .attr('height', 20)
    //     .attr('width', 20)
    //     .style('fill', colors[1])

    // svg.append('rect')
    //     .attr('x', width - 190)
    //     .attr('y', 60)
    //     .attr('height', 20)
    //     .attr('width', 20)
    //     .style('fill', colors[2])

    // svg.append('text')
    //     .attr('x', width - 160)
    //     .attr('y', 20)
    //     .attr('dominant-baseline', 'middle')
    //     .attr('font-size', '18px')
    //     .text('Computing Systems')

    // svg.append('text')
    //     .attr('x', width - 160)
    //     .attr('y', 45)
    //     .attr('dominant-baseline', 'middle')
    //     .attr('font-size', '18px')
    //     .text('Power Systems')

    // svg.append('text')
    //     .attr('x', width - 160)
    //     .attr('y', 70)
    //     .attr('dominant-baseline', 'middle')
    //     .attr('font-size', '18px')
    //     .text('UI')
  }
  state = {
    show: false,
  };
  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    if (this.props.display === 1) {
      let pageData = this.state.pageData;
      if (pageData === undefined) return <div></div>;
      else
        return (
          <div className="AboutPage">
            <header class="bg-white shadow">
              <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                  {pageData.header}
                </h1>
              </div>
            </header>
            <main>
              <div class="max-w-6xl mx-auto my-auto sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                  <h2 class="text-2xl py-4 font-bold text-gray-900">
                    Electrical Team Overview
                  </h2>
                  <p>{pageData.overviewText}</p>
                  <AboutScrollbar
                    team="Leadership"
                    teamData={pageData.Leadership}
                  />
                  <AboutScrollbar
                    team="Computing Systems"
                    teamData={pageData.ComputingSystems}
                  />

                  <AboutScrollbar
                    team="Power Systems"
                    teamData={pageData.PowerSystems}
                  />

                  <AboutScrollbar team="UI" teamData={pageData.UI} />

                  {/* <h2 class="text-2xl font-bold text-gray-900">Workshops</h2>
                  <p class="py-4">{pageData.workshopsText}</p>
                  <img
                    src="./img/AgileWorkshop.png"
                    alt="Agile Workshop"
                    height="50%"
                    width="50%"
                  /> */}
                  {/* 
                  <h2 class="text-2xl py-4 font-bold text-gray-900">
                    Velocity
                  </h2>
                  <p class="pb-4">{pageData.velocityText}</p>
                  <div class="velocityGraph"></div>
                  <div></div> */}
                </div>
              </div>
            </main>
          </div>
        );
    } else {
      return <div className="AboutPage"></div>;
    }
  }
}
