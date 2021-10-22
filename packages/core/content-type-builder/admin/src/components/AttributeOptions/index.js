/**
 *
 * AttributeOptions
 *
 */

import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Box } from '@strapi/parts/Box';
import { Divider } from '@strapi/parts/Divider';
import { Grid, GridItem } from '@strapi/parts/Grid';
import { KeyboardNavigable } from '@strapi/parts/KeyboardNavigable';
import { ModalBody } from '@strapi/parts/ModalLayout';
import { Flex } from '@strapi/parts/Flex';
import { Stack } from '@strapi/parts/Stack';
import { H2 } from '@strapi/parts/Text';
import { getTrad } from '../../utils';
import AttributeOption from './AttributeOption';

const AttributeOptions = ({ attributes, forTarget, kind }) => {
  const { formatMessage } = useIntl();
  const titleIdSuffix = forTarget.includes('component') ? 'component' : kind;
  const titleId = getTrad(`modalForm.sub-header.chooseAttribute.${titleIdSuffix}`);

  return (
    <ModalBody>
      <Flex>
        <H2>{formatMessage({ id: titleId, defaultMessage: 'Select a field' })}</H2>
      </Flex>
      <Divider />
      <Box paddingTop={4} paddingBottom={4}>
        <KeyboardNavigable tagName="button">
          <Stack size={8}>
            {attributes.map((attributeRow, index) => {
              const key = index;

              return (
                <Grid key={key} gap={0}>
                  {attributeRow.map((attribute, index) => {
                    const isOdd = index % 2 === 1;
                    const paddingLeft = isOdd ? 2 : 0;
                    const paddingRight = isOdd ? 0 : 2;

                    return (
                      <GridItem key={attribute} col={6} style={{ height: '100%' }}>
                        <Box
                          paddingLeft={paddingLeft}
                          paddingRight={paddingRight}
                          paddingBottom={1}
                          style={{ height: '100%' }}
                        >
                          <AttributeOption type={attribute} />
                        </Box>
                      </GridItem>
                    );
                  })}
                </Grid>
              );
            })}
          </Stack>
        </KeyboardNavigable>
      </Box>
    </ModalBody>
  );
};

AttributeOptions.propTypes = {
  attributes: PropTypes.array.isRequired,
  forTarget: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
};

export default AttributeOptions;
