import { useCallback } from 'react'
import { OrderForm } from 'vtex.order-manager'

export const fetchDocument = () => {
  const { orderForm: { id: orderFormId } } = OrderForm.useOrderForm()

  const postEntry = useCallback(async (dataEntity: string, formData: object) => {

    if (orderFormId === 'default-order-form') return

    const data = await (
      await fetch(`/_v/${orderFormId}/safedata/${dataEntity}/documents`, {
        body: JSON.stringify(formData),
        headers: {
          Accept: 'application/vnd.vtex.ds.v10+json',
          'Content-Type': 'application/json',
        },
        method: 'PATCH',
      })
    ).json()

    return data
  }, [orderFormId])

  const getEntry = async (
    dataEntity: string,
    phone: string,
    field: string
  ) => {
    const data = await (
      await fetch(`/api/dataentities/${dataEntity}/search?${field}=${phone}`, {
        headers: {
          Accept: 'application/vnd.vtex.ds.v10+json',
          'Content-Type': 'application/json',
        },
        method: 'GET',
      })
    ).json()

    return data
  }

  return { postEntry, getEntry }
}

export default fetchDocument