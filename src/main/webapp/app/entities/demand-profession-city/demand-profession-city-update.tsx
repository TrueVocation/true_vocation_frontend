import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IProfession } from 'app/shared/model/profession.model';
import { getEntities as getProfessions } from 'app/entities/profession/profession.reducer';
import { ICity } from 'app/shared/model/city.model';
import { getEntities as getCities } from 'app/entities/city/city.reducer';
import { getEntity, updateEntity, createEntity, reset } from './demand-profession-city.reducer';
import { IDemandProfessionCity } from 'app/shared/model/demand-profession-city.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const DemandProfessionCityUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const professions = useAppSelector(state => state.profession.entities);
  const cities = useAppSelector(state => state.city.entities);
  const demandProfessionCityEntity = useAppSelector(state => state.demandProfessionCity.entity);
  const loading = useAppSelector(state => state.demandProfessionCity.loading);
  const updating = useAppSelector(state => state.demandProfessionCity.updating);
  const updateSuccess = useAppSelector(state => state.demandProfessionCity.updateSuccess);
  const handleClose = () => {
    props.history.push('/demand-profession-city' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getProfessions({}));
    dispatch(getCities({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...demandProfessionCityEntity,
      ...values,
      profession: professions.find(it => it.id.toString() === values.profession.toString()),
      city: cities.find(it => it.id.toString() === values.city.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...demandProfessionCityEntity,
          profession: demandProfessionCityEntity?.profession?.id,
          city: demandProfessionCityEntity?.city?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="truevocationApp.demandProfessionCity.home.createOrEditLabel" data-cy="DemandProfessionCityCreateUpdateHeading">
            <Translate contentKey="truevocationApp.demandProfessionCity.home.createOrEditLabel">
              Create or edit a DemandProfessionCity
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="demand-profession-city-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('truevocationApp.demandProfessionCity.actualInPercent')}
                id="demand-profession-city-actualInPercent"
                name="actualInPercent"
                data-cy="actualInPercent"
                type="text"
              />
              <ValidatedField
                id="demand-profession-city-profession"
                name="profession"
                data-cy="profession"
                label={translate('truevocationApp.demandProfessionCity.profession')}
                type="select"
              >
                <option value="" key="0" />
                {professions
                  ? professions.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="demand-profession-city-city"
                name="city"
                data-cy="city"
                label={translate('truevocationApp.demandProfessionCity.city')}
                type="select"
              >
                <option value="" key="0" />
                {cities
                  ? cities.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/demand-profession-city" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default DemandProfessionCityUpdate;
