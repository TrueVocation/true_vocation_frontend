import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './demand-profession-city.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const DemandProfessionCityDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const demandProfessionCityEntity = useAppSelector(state => state.demandProfessionCity.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="demandProfessionCityDetailsHeading">
          <Translate contentKey="truevocationApp.demandProfessionCity.detail.title">DemandProfessionCity</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{demandProfessionCityEntity.id}</dd>
          <dt>
            <span id="actualInPercent">
              <Translate contentKey="truevocationApp.demandProfessionCity.actualInPercent">Actual In Percent</Translate>
            </span>
          </dt>
          <dd>{demandProfessionCityEntity.actualInPercent}</dd>
          <dt>
            <Translate contentKey="truevocationApp.demandProfessionCity.profession">Profession</Translate>
          </dt>
          <dd>{demandProfessionCityEntity.profession ? demandProfessionCityEntity.profession.id : ''}</dd>
          <dt>
            <Translate contentKey="truevocationApp.demandProfessionCity.city">City</Translate>
          </dt>
          <dd>{demandProfessionCityEntity.city ? demandProfessionCityEntity.city.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/demand-profession-city" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/demand-profession-city/${demandProfessionCityEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default DemandProfessionCityDetail;
