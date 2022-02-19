import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './contact.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const ContactDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const contactEntity = useAppSelector(state => state.contact.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="contactDetailsHeading">
          <Translate contentKey="truevocationApp.contact.detail.title">Contact</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{contactEntity.id}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="truevocationApp.contact.type">Type</Translate>
            </span>
          </dt>
          <dd>{contactEntity.type}</dd>
          <dt>
            <span id="contact">
              <Translate contentKey="truevocationApp.contact.contact">Contact</Translate>
            </span>
          </dt>
          <dd>{contactEntity.contact}</dd>
          <dt>
            <Translate contentKey="truevocationApp.contact.course">Course</Translate>
          </dt>
          <dd>{contactEntity.course ? contactEntity.course.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.contact.university">University</Translate>
          </dt>
          <dd>{contactEntity.university ? contactEntity.university.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.contact.portfolio">Portfolio</Translate>
          </dt>
          <dd>{contactEntity.portfolio ? contactEntity.portfolio.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/contact" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/contact/${contactEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ContactDetail;
