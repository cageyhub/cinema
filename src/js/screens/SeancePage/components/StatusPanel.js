import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import {
	ROW_TITLE,
	SEAT_TITLE,
	PRICE_TITLE,
} from '../../../helpers/constant';

const StatusPanel = ({
	activeSeats, getRowNum, getSeatNum, getFullPrice, onDeleteSeat, onDeleteAllSeats, onSendOrder,
}) => (
	<div className="status-panel">
		<h4>Обрані місця</h4>
		<table>
			<thead className="status-panel__head">
				<tr>
					<th>{ROW_TITLE}</th>
					<th>{SEAT_TITLE}</th>
					<th>{PRICE_TITLE}</th>
					<th />
				</tr>
			</thead>
			<tbody className="status-panel__body">
				{activeSeats.length ? activeSeats.map((item, index) => (
					<tr key={item.id}>
						<td>{getRowNum(item.id)}</td>
						<td>{getSeatNum(item.id)}</td>
						<td>{`${item.price} грн`}</td>
						<td><Button modifier="delete" value="x" targetValue={index} onClick={onDeleteSeat} /></td>
					</tr>
				)) : null
				}
			</tbody>
			{activeSeats.length ? (
				<tfoot className="status-panel__footer">
					<tr>
						<td colSpan="3">Видалити все</td>
						<td><Button modifier="delete" value="x" onClick={onDeleteAllSeats} /></td>
					</tr>
					<tr className="status-panel__summary">
						<td colSpan="2">Всього:</td>
						<td colSpan="2">{`${getFullPrice()} грн`}</td>
					</tr>
					<tr>
						<td colSpan="4">
							<Button
								modifier="submit"
								onClick={onSendOrder}
								value="Далі"
								title="Далі"
							/>
						</td>
					</tr>
				</tfoot>
			) : null
			}
		</table>
	</div>
);

StatusPanel.propTypes = {
	activeSeats: PropTypes.array,
	getRowNum: PropTypes.func,
	getSeatNum: PropTypes.func,
	getFullPrice: PropTypes.func,
	onDeleteSeat: PropTypes.func,
	onDeleteAllSeats: PropTypes.func,
	onSendOrder: PropTypes.func,
};

export default StatusPanel;
