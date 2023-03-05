import React from 'react';

export const TodoList = (props) => {
    return (
        <section>
            <h1>Дела</h1>
            <table className="table is-hoverable is-fullwidth">
                <tbody>
                {props.list.map((item) => (
                    <tr key={item.key}>
                        <td>
                            {item.done && <del>{item.title}</del>}
                            {!item.done && item.title}
                        </td>
                        <td>
                            <buttom className="buttom is-success" title="Пометить как сделанное" disabled={item.done} >
                                &#9745;
                            </buttom>
                        </td>
                        <td>
                            <button className="button is-danger" title="Удалить">
                                &#9746;
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
}
