import React from "react";
import ProjectList from "../project-list/ProjectList";
import Toolbar from "../toolbar/Toolbar";
import { FiltersTypes } from "../../const";

export default class Portfolio extends React.Component {

  allProjects = this.props.data;

  constructor(props) {
    super(props)

    this.state = { 
      activeFilter: FiltersTypes.ALL
    };
  }

  filterProjects = () => {
    if (this.state.activeFilter === FiltersTypes.ALL) {
      return this.allProjects
    }
    return this.allProjects.filter((elem) => this.state.activeFilter === elem.category);
  };

  clickHandler = (evt) => {
    this.setState({ activeFilter: evt.target.dataset.name });
  };

  render () {

    return (
      <>
        <div>
          <Toolbar
            filters={[
              FiltersTypes.ALL, 
              FiltersTypes.WEBSITES, 
              FiltersTypes.FLAYERS, 
              FiltersTypes.BUSINESS_CARDS
            ]}
            selected={this.state.activeFilter}
            onSelectFilter={() => this.clickHandler}
          />
        </div>
        <div>
          <ProjectList projects={this.filterProjects()}/>
        </div>
      </>
    );

  };
};