import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IFaculty } from 'app/shared/model/faculty.model';
import { getEntities as getFaculties } from 'app/entities/faculty/faculty.reducer';
import { ICity } from 'app/shared/model/city.model';
import { getEntities as getCities } from 'app/entities/city/city.reducer';
import { getEntity, updateEntity, createEntity, reset } from './university.reducer';
import { IUniversity } from 'app/shared/model/university.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const UniversityUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const faculties = useAppSelector(state => state.faculty.entities);
  const cities = useAppSelector(state => state.city.entities);
  const universityEntity = useAppSelector(state => state.university.entity);
  const loading = useAppSelector(state => state.university.loading);
  const updating = useAppSelector(state => state.university.updating);
  const updateSuccess = useAppSelector(state => state.university.updateSuccess);
  const handleClose = () => {
    props.history.push('/university' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getFaculties({}));
    dispatch(getCities({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...universityEntity,
      ...values,
      faculties: mapIdList(values.faculties),
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
          ...universityEntity,
          faculties: universityEntity?.faculties?.map(e => e.id.toString()),
          city: universityEntity?.city?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="truevocationApp.university.home.createOrEditLabel" data-cy="UniversityCreateUpdateHeading">
            <Translate contentKey="truevocationApp.university.home.createOrEditLabel">Create or edit a University</Translate>
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
                  id="university-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('truevocationApp.university.name')}
                id="university-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.university.address')}
                id="university-address"
                name="address"
                data-cy="address"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.university.description')}
                id="university-description"
                name="description"
                data-cy="description"
                type="text"
                validate={{
                  maxLength: { value: 1000, message: translate('entity.validation.maxlength', { max: 1000 }) },
                }}
              />
              <ValidatedField
                label={translate('truevocationApp.university.dormitory')}
                id="university-dormitory"
                name="dormitory"
                data-cy="dormitory"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('truevocationApp.university.military')}
                id="university-military"
                name="military"
                data-cy="military"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('truevocationApp.university.status')}
                id="university-status"
                name="status"
                data-cy="status"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.university.code')}
                id="university-code"
                name="code"
                data-cy="code"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.university.logo')}
                id="university-logo"
                name="logo"
                data-cy="logo"
                type="text"
              />
              <ValidatedField
                label={translate('truevocationApp.university.faculty')}
                id="university-faculty"
                data-cy="faculty"
                type="select"
                multiple
                name="faculties"
              >
                <option value="" key="0" />
                {faculties
                  ? faculties.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="university-city"
                name="city"
                data-cy="city"
                label={translate('truevocationApp.university.city')}
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/university" replace color="info">
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

export default UniversityUpdate;
