import { formatDate } from "@fullcalendar/core";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import styled from "@emotion/styled";

const StyleWrapper = styled.div`
  .fc td {
    background: rgb(229 231 235/ 0.2);
  }

  .fc-direction-ltr .fc-button-group > .fc-button {
    color: black;
    background: rgb(229 231 235/ 0.8);
    border: none;
  }

  @media (max-width: 768px) {
    .fc-toolbar-chunk .fc-button-group {
      padding: 0px 20px;
      display: flex;
      flex-direction: column;
    }
    .fc-toolbar-chunk .fc-button-group {
      margin-bottom: 10px;
    }
    .fc-button-group {
      display: flex;
    }
  }
`;

function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dataStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove;
    }
  };

  return (
    <div className="md:mx-6 mx-2 lg:p-6 bg-white rounded-lg ">
      <div className="flex justify-between flex-col md:flex-row">
        <div
          className="rounded-sm p-[15px] "
          style={{
            flex: "1 1 20%",
          }}
        >
          <h1 className="font-bold text-lg">Events</h1>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: "rgb(229 231 235/ 0.8)",
                  margin: "10px 0",
                  borderRadius: "6px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div
          style={{
            flex: "1 1 100%",
          }}
        >
          <StyleWrapper>
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                interactionPlugin,
                listPlugin,
                timeGridPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                { id: "1234", title: "All-day event", date: "2024-01-14" },
                { id: "2534", title: "Timed event", date: "2024-03-19" },
              ]}
            />
          </StyleWrapper>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
