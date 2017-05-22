import React, { Component } from 'react';
import { getSideProject } from '../apis/sideProjects';

class SideProject extends Component {

  render() {

    const SideProject = getSideProject();
    const RoleRows = (roles) => {
      return roles.map((role) => {
        return (
          <div key={role.title} className="role_wrapper clearfix">
            <p className="role">Role</p>
            <p className="role_title">{role.title}<br />
              <span className="role_skills">{role.skills}</span></p>
          </div>
        )
      });
    }

    const SideProjectRows = SideProject.map((row) => {
      const classname = 'portfolio_item clearfix';
      return (
        <div key={row.title} className={classname}>
          <h2><a href={row.link} target="_blank">(visit site)</a> {row.title}</h2>
          {RoleRows(row.roles)}
          <p>{row.content}</p>
        </div>
      )
    });

    return (
      <div className="posts">
        {SideProjectRows}
      </div>
    );

  }
}

export default SideProject;